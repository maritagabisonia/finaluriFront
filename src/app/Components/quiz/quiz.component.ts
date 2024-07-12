import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Question } from '../../Models/Question';
import { Answer } from '../../Models/Answer';
import { QuestionsService } from '../../Services/questions.service';
import { UserForm } from '../../Models/UserForm ';

@Component({
  selector: 'app-quiz',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  quizForm: FormGroup;
  questionsList: Question[] = [];

  constructor(private fb: FormBuilder, public questionsService: QuestionsService) {
    this.quizForm = this.fb.group({
      fullname: ['', Validators.required],
      questions: this.fb.array([])
    });
  }

  ngOnInit(): void {
    this.questionsService.getQuestions().subscribe(data => {
      this.questionsList = data;
      this.populateQuestions();
    });
  }

  createQuestion(questionText: string = ''): FormGroup {
    return this.fb.group({
      question: [questionText, Validators.required],
      answer: ['', Validators.required],
      important: [true]
    });
  }

  populateQuestions() {
    const questionsArray = this.quizForm.get('questions') as FormArray;
    this.questionsList.forEach(q => {
      questionsArray.push(this.createQuestion(q.question));
    });
  }

  get questions(): FormArray {
    return this.quizForm.get('questions') as FormArray;
  }

  addQuestion() {
    this.questions.push(this.createQuestion());
  }

  removeQuestion(index: number) {
    this.questions.removeAt(index);
  }

  onSubmit() {
    const formValue = this.quizForm.value;
    const userForm = new UserForm(formValue.fullname, formValue.questions.map((q: any) => new Answer(q.answer, q.question)));
    
    this.questionsService.parseJsonAnswers([userForm]).subscribe(
      res => {
        console.log('Submission successful', res);
      },
      err => {
        console.error('Submission error', err);
      }
    );
  }
}

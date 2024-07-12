import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Question } from '../../Models/Question';
import { QuestionsService } from '../../Services/questions.service';

@Component({
  selector: 'app-add-user-answers',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './add-user-answers.component.html',
  styleUrls: ['./add-user-answers.component.css']
})
export class AddUserAnswersComponent implements OnInit {
  quizForm: FormGroup;
  questionsList: Question[] = [];

  constructor(private fb: FormBuilder, public questionsService: QuestionsService) {
    this.quizForm = this.fb.group({
      questions: this.fb.array([])
    });
  }

  ngOnInit(): void {
    this.questionsService.getQuestions().subscribe(data => {
      this.questionsList = data;
      this.populateQuestions();
    });
  }

  createQuestion(question?: Question): FormGroup {
    return this.fb.group({
      question: [question ? question.question : '', Validators.required],
      answer: [question ? question.answer : '', Validators.required],
      important: [question ? question.important : true]
    });
  }

  populateQuestions() {
    const questionsArray = this.quizForm.get('questions') as FormArray;
    this.questionsList.forEach(question => {
      questionsArray.push(this.createQuestion(question));
    });
  }

  get questions(): FormArray {
    return this.quizForm.get('questions') as FormArray;
  }

  addQuestion() {
    this.questions.push(this.createQuestion());
  }

  updateQuestion(index: number) {
    console.log(this.quizForm.value);
    this.questions.controls.forEach((ctrl, index) => {
      const question = new Question();
      Object.assign(question, ctrl.value);
      this.questionsService.addQuestion(question).subscribe(res => {
        this.questionsService.getQuestions().subscribe(data => {
          console.log("API CALL ENDED");
          console.log(data);
          this.questionsService.QuestionsList = data;
        });
        console.log("res");
      });
    });
  }

  removeQuestion(index: number) {
    this.questions.removeAt(index);
  }

  onSubmit() {
    console.log(this.quizForm.value);
    this.questions.controls.forEach((ctrl, index) => {
      const question = new Question();
      Object.assign(question, ctrl.value);
      this.questionsService.addQuestion(question).subscribe(res => {
        this.questionsService.getQuestions().subscribe(data => {
          console.log("API CALL ENDED");
          console.log(data);
          this.questionsService.QuestionsList = data;
        });
        console.log("res");
      });
    });
  }
}

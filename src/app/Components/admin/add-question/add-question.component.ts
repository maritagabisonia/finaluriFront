import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { PasswordModule } from 'primeng/password';
import { Question } from '../../../Models/Question';
import { TriStateCheckboxModule } from 'primeng/tristatecheckbox';
import { QuestionsService } from '../../../Services/questions.service';


@Component({
  selector: 'app-add-question',
  standalone: true,
  imports: [FloatLabelModule,InputTextModule,FormsModule,ButtonModule,ReactiveFormsModule,PasswordModule,TriStateCheckboxModule],
  templateUrl: './add-question.component.html',
  styleUrl: './add-question.component.css'
})
export class AddQuestionComponent {
  QuestionForm:FormGroup;
  Question:Question= new Question()


  constructor(private fb: FormBuilder, public questionsService:QuestionsService){
    this.QuestionForm = this.fb.group({
      question: ['', Validators.required],
      answer: ['', Validators.required],
      important: [true, Validators.required ]
  });
  }
  onSubmit() {
    Object.assign(this.Question, this.QuestionForm.value);
    console.log(this.Question)
    this.questionsService.addQuestion(this.Question).subscribe(res=>{
     this.questionsService.getQuestions().subscribe(data => {
          console.log("API CALL ENDED");
          console.log(data);
          this.questionsService.QuestionsList = data;
  
    });
    console.log("res")
        
      }
    );
  }
    
}


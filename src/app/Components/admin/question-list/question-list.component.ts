import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { QuestionsService } from '../../../Services/questions.service';
import { Question } from '../../../Models/Question';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-question-list',
  standalone: true,
  imports: [NgFor],
  templateUrl: './question-list.component.html',
  styleUrl: './question-list.component.css'
})
export class QuestionListComponent implements OnInit {
  questions!: Question[];
  constructor(private fb: FormBuilder, public questionsService:QuestionsService){

  }
  ngOnInit(){
    this.questionsService.getQuestions().subscribe(
          data => {
            this.questionsService.QuestionsList = data;
            this.questions = this.questionsService.QuestionsList ;
            console.log(data)
          }
      
    );
    

  }


}

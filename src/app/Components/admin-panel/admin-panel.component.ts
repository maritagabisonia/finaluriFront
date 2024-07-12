import { Component } from '@angular/core';
import { AddQuestionComponent } from '../admin/add-question/add-question.component';
import { QuestionListComponent } from '../admin/question-list/question-list.component';
import { AddUserAnswersComponent } from '../add-user-answers/add-user-answers.component';

@Component({
  selector: 'app-admin-panel',
  standalone: true,
  imports: [AddQuestionComponent, QuestionListComponent, AddUserAnswersComponent],
  templateUrl: './admin-panel.component.html',
  styleUrl: './admin-panel.component.css'
})
export class AdminPanelComponent {

}

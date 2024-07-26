import { Component } from '@angular/core';
import { QuestionFormComponent } from '../question-form/question-form.component';
import { QuestionsListComponent } from '../questions-list/questions-list.component';



@Component({
  selector: 'app-adm-panel',
  standalone: true,
  imports: [ QuestionFormComponent, QuestionsListComponent],
  templateUrl: './adm-panel.component.html',
  styleUrl: './adm-panel.component.css'
})
export class AdmPanelComponent {

  
}

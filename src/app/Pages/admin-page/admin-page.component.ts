import { Component } from '@angular/core';
import { TabViewModule } from 'primeng/tabview';
import { AdminPanelComponent } from '../../Components/admin-panel/admin-panel.component';

@Component({
  selector: 'app-admin-page',
  standalone: true,
  imports: [TabViewModule, AdminPanelComponent],
  templateUrl: './admin-page.component.html',
  styleUrl: './admin-page.component.css'
})
export class AdminPageComponent {

}

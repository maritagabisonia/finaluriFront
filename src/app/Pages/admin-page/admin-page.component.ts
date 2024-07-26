import { Component } from '@angular/core';
import { TabViewModule } from 'primeng/tabview';
import { AdmPanelComponent } from '../../Components/adm-panel/adm-panel.component';
import { UploadedComponent } from '../../Components/uploaded/uploaded.component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-admin-page',
  standalone: true,
  imports: [TabViewModule, AdmPanelComponent, UploadedComponent,NgIf],
  templateUrl: './admin-page.component.html',
  styleUrl: './admin-page.component.css'
})
export class AdminPageComponent {
  isAdminPanel: boolean = true;

  showAdminPanel() {
    this.isAdminPanel = true;
  }

  showUploaded() {
    this.isAdminPanel = false;
  }
}

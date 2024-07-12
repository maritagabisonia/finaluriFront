import { Component } from '@angular/core';
import { AdminService } from '../../Services/admin.service';
import { TabViewModule } from 'primeng/tabview';
import { LogInComponent } from '../../Components/log-in/log-in.component';
import { SignUpComponent } from '../../Components/sign-up/sign-up.component';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [TabViewModule, LogInComponent, SignUpComponent],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent  
{
  constructor(private adminService:AdminService){}

  ngOnInit(){

  }
}

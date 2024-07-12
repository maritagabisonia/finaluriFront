import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { LogIn } from '../../Models/LogIn';
import { Router } from '@angular/router';
import { UserService } from '../../Services/user.service';
import { PasswordModule } from 'primeng/password';



@Component({
  selector: 'app-log-in',
  standalone: true,
  imports: [FloatLabelModule,InputTextModule,FormsModule,ButtonModule,ReactiveFormsModule,PasswordModule],
  templateUrl: './log-in.component.html',
  styleUrl: './log-in.component.css'
})
export class LogInComponent {
  LogInForm:FormGroup;
  UserLogIn:LogIn= new LogIn()


  constructor(private fb: FormBuilder,public userService:UserService,private router: Router){
    this.LogInForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
  });
  }



  login(): void {
    Object.assign(this.UserLogIn, this.LogInForm.value);
    this.userService.LogIn(this.UserLogIn).subscribe({
      next: res => {
        console.log(res);
        localStorage.setItem('token', res.token);
        this.router.navigate(['/admin']);  
      },
      error: err => {
        console.error('Error during login:', err);
      }
    });
  }
}

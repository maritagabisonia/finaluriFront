import { Component } from '@angular/core';
import { UserService } from '../../Services/user.service';
import { ActivatedRoute } from '@angular/router';
import { GetUser } from '../../Models/GetUser';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {

  idString: number | null;
  user:GetUser= new GetUser();


  constructor(public userService: UserService, private route: ActivatedRoute) {
    this.idString = null; // Initialize idString
  }

  ngOnInit() {
    this.idString = Number(this.route.snapshot.paramMap.get('id'));
    console.log(this.idString)
    this.userService.get_user_by_id(this.idString).subscribe({
      next: res => {
        console.log(res);
        this.user = res;
        console.log(this.user)
      },
      error: err => {
        console.error('Error during login:', err);
      }
    });
  }

}

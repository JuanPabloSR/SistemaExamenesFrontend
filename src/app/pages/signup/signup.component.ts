import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public user = {
    username : '',
    password : '',
    name : '',
    lastName : '',
    email : '',
    phoneNumber : ''
  }

  constructor(private userService:UserService, private snack:MatSnackBar) { }

  ngOnInit(): void {
  }

  formSubmit() {
    console.log(this.user);
    if(this.user.username == '' || this.user.username == null){
      this.snack.open('The username is necesary', 'acept', {
        duration : 3000,
        verticalPosition : 'top',
        horizontalPosition : 'right'
      });
    }

    this.userService.addUser(this.user).subscribe(
      (data) => {
        console.log(data);
        alert('User successfully saved');
      }, (error) => {
        console.log(error);
        alert('A system error occurred')
      }
    )
  }



}

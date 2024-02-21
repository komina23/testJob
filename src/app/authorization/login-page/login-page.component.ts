import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

export interface user{
  id?:string,
  email:string,
  password:string,
  avatar?:string,
  displayName?:string,
}
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.less']
})
export class LoginPageComponent  implements OnInit{
  authForm:FormGroup;
  password='password';
  show = false;
  isLoginMode=true;
  isUsers = this.AuthService.getItem('users');
  emailRegex = /^([a-zA-Z0-9_\.\-]+)@([a-zA-Z0-9_\-]+)\.([a-zA-Z]{2,5})$/;
  users = [
    {
      id: '162534356df543',
      email: 'LenaKotova@gmail.com',
      password: '12345678',
      avatar: 'avatar.png',
      displayName: 'Елена Котова',
    },
    {
      id: '1D6e253s43j5fd6',
      email: 'test@gmail.com',
      password: '112345678',
      avatar: 'avatar2.png',
      displayName: 'Ирина Якушевич',
    },
  ];

  constructor(private fb: FormBuilder, private AuthService:AuthService, private router: Router){
    this.authForm = fb.group({
      email: ['', [Validators.required, Validators.email, Validators.pattern(this.emailRegex)]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  ngOnInit(): void {
    if(this.isUsers){
      this.AuthService.setItem('users', this.users);
    }
  }

  onShowedPass(){
    if (this.password === 'password') {
      this.password = 'text';
      this.show = true;
    } else {
      this.password = 'password';
      this.show = false;
    }
  }

  onSubmit(val:any){
    let userName = val.value.email;
    let userPass = val.value.password;
    let foundUser = this.isUsers.find((user:any) => user.email === userName && user.password === userPass);
  console.log(foundUser)
    if(foundUser){
      localStorage.setItem('login', 'true');
      localStorage.setItem('currentUser', JSON.stringify(foundUser));
      this.router.navigate(['task-list']);
    }else{
      this.isLoginMode = false;  
    }
  }
}

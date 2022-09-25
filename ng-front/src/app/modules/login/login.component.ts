import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../service/user/auth.service";
import {UserService} from "../../service/user/user.service";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss','../../styles/form_style.scss']
})
export class LoginComponent implements OnInit {
  form: any = {
    email: null,
    password: null
  };
  isLoginForm=true;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(private user:UserService, private auth:AuthService) {

  }

  ngOnInit(): void {

  }

  onSubmit() {
    this.auth.login(this.form.email,this.form.password).subscribe({
      next: data =>{
        this.user.saveUser(data.token)
      }
    , error: err => {
      this.errorMessage = err.error.message;
      this.isSignUpFailed = true;
    }})
  }

  changeForm() {
    this.isLoginForm= !this.isLoginForm;
  }
}

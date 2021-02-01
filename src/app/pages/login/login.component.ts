import { LoginService } from './../../login.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  userLogin = {
    email: '',
    password: '',
  };

  constructor(private loginService: LoginService, private router: Router) {}

  ngOnInit(): void {}
  login() {
    let loginData = {
      email: this.userLogin.email,
      password: this.userLogin.password,
    };
    this.loginService.login(loginData).then((res: any) => {
      localStorage.setItem('token', JSON.stringify(res));
      this.router.navigate(['main']);
      console.log(res);

      
    });
  }
}

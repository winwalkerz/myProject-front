import { LoginService } from './../../login.service';
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
// import * as jwt_decode from 'jwt-decode'
import jwt_decode from 'jwt-decode';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  err= ''
  userLogin = {
    email: '',
    password: '',
  };
  decode: any;
  constructor(private loginService: LoginService, private router: Router) {}

  ngOnInit(): void {}
  login() {
    let loginData = {
      email: this.userLogin.email,
      password: this.userLogin.password,
    };
    this.loginService.login(loginData).then((res: any) => {
      //point
      // console.log('token');

      localStorage.setItem('token', JSON.stringify(res));   //เก็บ token ลง localstorage
      var token = localStorage.getItem('token');    //สร้างตัวแปลมาเก็บ token ที่มาจาก storage
      this.decode = jwt_decode(token || '');
      // console.log(this.decode);
      if (this.decode.role === 'user') {
        this.router.navigate(['main']);
      } else {
        this.router.navigate(['admin/users-list']);
      }
      //
      // console.log(token);
    });
  }
}
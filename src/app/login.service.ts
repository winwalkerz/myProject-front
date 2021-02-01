import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
const api_url='http://localhost:3000/api'
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  
  constructor(private httpClient:HttpClient) { }
  login(data: any) {
    return this.httpClient
      .post(`${api_url}/authen/login`, {
        // domain: 'uat.ketshoptest.com',
        email: data.email,
        password: data.password,
      })
      .toPromise();
  }
}

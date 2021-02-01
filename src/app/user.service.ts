import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
const api_url='http://localhost:3000/api'
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _http:HttpClient) { }
  getOrderByID() {
    let token = localStorage.getItem('token');
    let token_json = JSON.parse(token || '{}');

    let _header = {
      headers: {
        authorization: `Bearer ${token_json.token}`,
      },
    };
    console.log(_header)
    return this._http.get(`${api_url}/users/showDB`, _header)
      .toPromise();
  }
}

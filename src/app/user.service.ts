import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
const api_url = 'http://localhost:3000/api';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private _http: HttpClient) {}
  getOrderByID(data:any) {
    let token = localStorage.getItem('token');
    let token_json = JSON.parse(token || '{}');

    let _header = {
      headers: {
        authorization: `Bearer ${token_json.token}`,
      },
    };
    console.log(_header);
    return this._http.post(`${api_url}/users/showDB`,data, _header).toPromise();
  }
  getAlluser(data: any) {
    let token = localStorage.getItem('token');
    let token_json = JSON.parse(token || '{}');

    let _header = {
      headers: {
        authorization: `Bearer ${token_json.token}`,
      },
    };
    return this._http
      .post(`${api_url}/users/showbyuser/`, data, _header)
      .toPromise();
  }
  memberList(data: any) {
    return this._http.post(`${api_url}/users/search/`, data).toPromise();
  }

  editUser(id: any, data: any) {
    let token = localStorage.getItem('token');
    let token_json = JSON.parse(token || '{}');

    let _header = {
      headers: {
        authorization: `Bearer ${token_json.token}`,
      },
    };
    return this._http
      .put(`${api_url}/users/update/${id}`, data, _header)
      .toPromise();
  }
  deleteUser(id: any) {
    let token = localStorage.getItem('token');
    let token_json = JSON.parse(token || '{}');

    let _header = {
      headers: {
        authorization: `Bearer ${token_json.token}`,
      },
    };
    return this._http
      .delete(`${api_url}/users/delete/${id}`, _header)
      .toPromise();
  }
}
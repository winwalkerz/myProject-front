import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; //import Enable HTTP services
const url = 'http://localhost:3000/api';
@Injectable({
  providedIn: 'root',
})
export class CrudService {
  constructor(
    private http: HttpClient // Inject HttpClient มาใช้ใน component หรือ service.
  ) {}
  getLeaveAllByID(id:any) {
    let token = localStorage.getItem('token');
    let token_json = JSON.parse(token || '{}');

    let _header = {
      headers: {
        authorization: `Bearer ${token_json.token}`,
      },
    };
    // console.log(_header);
    return this.http.post(`${url}/leavework/searchbyid${id}`, _header).toPromise();
  }
 
  refresh() {
    return this.http.get(`${url}/users/search`).toPromise();
  }
  // เพิ่มมาใหม่
  show(data: any) {
    return this.http.post(`${url}/users/search`, data).toPromise();
  }
  createLeave(data: any) {
    return this.http.post(`${url}/leaveWork/createLeave`, data).toPromise();
  }

  createUsers(data: any) {
    return this.http.post(`${url}/users/create`, data).toPromise();
  }

  create(data: any) {
    return this.http.post(url, data).toPromise();
  }

  edit(id: any,data: any ) {
    let token = localStorage.getItem('token');
    let token_json = JSON.parse(token || '{}');

    let _header = {
      headers: {
        authorization: `Bearer ${token_json.token}`,
      },
    };
    return this.http.put(`${url}/leavework/update/${id}`, data).toPromise();
  }

  editadmin(id: any,data: any ) {
    let token = localStorage.getItem('token');
    let token_json = JSON.parse(token || '{}');

    let _header = {
      headers: {
        authorization: `Bearer ${token_json.token}`,
      },
    };
    return this.http.put(`${url}/leavework/updateadmin/${id}`, data,_header).toPromise();
  }

  delete(id: any, data:any) {
    return this.http.delete(`${url}/leavework/delete/${id}`,data).toPromise();
  }

  filter(data: any) {
    return this.http.post(`${url}/leavework/filter`, data).toPromise();
  }

  getLeaveByID(id:any) {
    let token = localStorage.getItem('token');
    let token_json = JSON.parse(token || '{}');

    let _header = {
      headers: {
        authorization: `Bearer ${token_json.token}`,
      },
    };
    return this.http.get(`${url}/leavework/searchdata/${id}`,_header).toPromise();
  }
}
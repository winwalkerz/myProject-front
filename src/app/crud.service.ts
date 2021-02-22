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
    return this.http.post(`${url}/users/createuser`, data).toPromise();
  }

  create(data: any) {
    return this.http.post(url, data).toPromise();
  }

  edit(id: any,data: any ) {
    return this.http.put(`${url}/leavework/update/${id}`, data).toPromise();
  }

  delete(id: any) {
    return this.http.delete(`${url}/leavework/delete/${id}`).toPromise();
  }
}
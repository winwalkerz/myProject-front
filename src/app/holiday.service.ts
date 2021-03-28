import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; //import Enable HTTP services
const url = 'http://localhost:3000/api';
@Injectable({
  providedIn: 'root'
})
export class HolidayService {

  constructor(private http: HttpClient) { }
  createHoliday(data: any) {
    let token = localStorage.getItem('token');
    let token_json = JSON.parse(token || '{}');

    let _header = {
      headers: {
        authorization: `Bearer ${token_json.token}`,
      },
    };
    return this.http.post(`${url}/holiday/createholiday`, data,_header).toPromise();
  }

  getHoliday(){
    let token = localStorage.getItem('token');
    let token_json = JSON.parse(token || '{}');

    let _header = {
      headers: {
        authorization: `Bearer ${token_json.token}`,
      },
    };
    return this.http.get(`${url}/holiday/getholiday`,_header).toPromise();
  }

  search(data:any){
    let token = localStorage.getItem('token');
    let token_json = JSON.parse(token || '{}');

    let _header = {
      headers: {
        authorization: `Bearer ${token_json.token}`,
      },
    };
    return this.http.post(`${url}/holiday/search`, data, _header).toPromise();
  }

  editHoliday(id:any, data:any){
    let token = localStorage.getItem('token');
    let token_json = JSON.parse(token || '{}');

    let _header = {
      headers: {
        authorization: `Bearer ${token_json.token}`,
      },
    };
    return this.http.put(`${url}/holiday/update${id}`, data, _header).toPromise();
  }

  deleteHoliday(id: any) {
    let token = localStorage.getItem('token');
    let token_json = JSON.parse(token || '{}');

    let _header = {
      headers: {
        authorization: `Bearer ${token_json.token}`,
      },
    };
    return this.http.delete(`${url}/holiday/delete/${id}`, _header)
      .toPromise();
  }
}
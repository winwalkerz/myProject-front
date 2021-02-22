import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; //import Enable HTTP services
const url = 'http://localhost:3000/api';
@Injectable({
  providedIn: 'root'
})
export class HolidayService {

  constructor(private http: HttpClient) { }
  createHoliday(data: any) {
    return this.http.post(`${url}/holiday/createholiday`, data).toPromise();
  }

  getHoliday(){
    return this.http.get(`${url}/holiday/getholiday`).toPromise();
  }

}
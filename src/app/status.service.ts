import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
const api_url = 'http://localhost:3000/api';

@Injectable({
  providedIn: 'root'
})
export class StatusService {

  constructor(private _http: HttpClient) { }
  getStatus() {
    return this._http.get(`${api_url}/leavework/getstatus`).toPromise();
  }
}

import  jwt_decode  from 'jwt-decode';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class GuardGuard implements CanActivate {
  decode:any
  constructor (private router:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):
     Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      var token = localStorage.getItem('token'); //สร้างตัวแปลมาเก็บ token ที่มาจาก storage
      this.decode = jwt_decode(token || '');
       if(localStorage.getItem('token')){
        return true;
       }
       this.router.navigate(['login'])
    return false;
  }
  
}

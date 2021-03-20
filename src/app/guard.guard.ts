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
       if(localStorage.getItem('token')){
        // var token = localStorage.getItem('token') //สร้างตัวแปลมาเก็บ token ที่มาจาก storage
        // this.decode = jwt_decode(token || '')
        // if(this.decode.role=='admin'){
        //   this.router.navigate(['admin/overview'])
        // }else if (this.decode.role=='user'){
        //   this.router.navigate(['main'])
        // }
        return true;
       }
       this.router.navigate(['login'])
    return false;
  }
  
}

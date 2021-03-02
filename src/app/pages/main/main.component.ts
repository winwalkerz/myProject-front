
import { UserService } from './../../user.service';
import { Component, OnInit } from '@angular/core';
import { NzDrawerService } from 'ng-zorro-antd/drawer'; //import service ของ ant
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
 
  isCollapsed = false;


  constructor(private router:Router,
              private userService: UserService) {}
  
  // search() {
  //   this.crud.show(this.value).then((res: any) => {
  //     this.data = res;
  //   });
  // }

  
  ngOnInit(): void {
    
  }

  logout() {
    this.router.navigate(['login']);
  }
}
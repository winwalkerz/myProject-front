
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
 name= {
   first:''
 }
 
  isCollapsed = false;

  listorder: any = [];

  constructor(private router:Router,
              private userService: UserService) {}
  
  // search() {
  //   this.crud.show(this.value).then((res: any) => {
  //     this.data = res;
  //   });
  // }
  ngOnInit(): void {
     this.showData();
     console.log(this.name.first + 'eieieieieieiie')
  }

  showData() {
    this.userService.getOrderByID().then((res: any) => {
      this.name = res;
    });
  }

  logout() {
    this.router.navigate(['login']);
  }
}
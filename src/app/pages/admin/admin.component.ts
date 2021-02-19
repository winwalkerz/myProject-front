import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { UserService } from './../../user.service';
import { NzDrawerService, NzDrawerRef } from 'ng-zorro-antd/drawer';
import { AddUsersComponent } from '../../components/add-users/add-users.component'

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnInit {

// info = {
  //   // id: '',
  //   page : 1,
  //   perpage :10,
  //   first_name: '',
  //   last_name: '',
  //   email: '',
  //   password: '',
  //   role: '',
  //   position: '',
  // };

  typeData: any = [];
  listAlluser: any = [];
  isCollapsed = false;
  dataDetailSendBefore: any;
  constructor(
    private Router:Router,
    private userservice: UserService,
    private nzdrawerservice: NzDrawerService
  ) {}

  ngOnInit(): void {
    
  }

  addUser() {
    const drawRef = this.nzdrawerservice.create<
    AddUsersComponent,
      { dataTypeSend: any }
    >({
      nzTitle: 'เพิ่ม User',
      nzContent: AddUsersComponent,
      nzWidth: '65%',
      nzCloseOnNavigation: true,
      nzContentParams: {
        dataTypeSend: this.typeData,
      },
      
    });

    drawRef.afterClose.subscribe(() => {
      this.getAlluser();
    });
  }

  getAlluser() {
    this.userservice.getAlluser().then((res: any) => {
      this.listAlluser = res;
    });
  }

  logout() {
    window.location.href = "http://localhost:4200/login";
  }


  // goCalender(){
  //   this.Router.navigate(['calender'])
  // }
}
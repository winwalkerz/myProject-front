import { Router } from '@angular/router'
import { Component, OnInit } from '@angular/core'
import { UserService } from './../../user.service'
import { NzDrawerService, NzDrawerRef } from 'ng-zorro-antd/drawer'
import { AddUsersComponent } from '../../components/add-users/add-users.component'
import jwt_decode from 'jwt-decode'
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  // typeData: any = [];
  listAlluser: any = []
  isCollapsed = false
  dataDetailSendBefore: any
  typeData: any = []
  decode: any
  constructor (
    private Router: Router,
    private userservice: UserService,
    private nzdrawerservice: NzDrawerService
  ) {}

  ngOnInit (): void {
    this.getAcc()
  }

  addUser () {
    const drawRef = this.nzdrawerservice.create<
      AddUsersComponent,
      { dataTypeSend: any }
    >({
      nzTitle: 'เพิ่ม User',
      nzContent: AddUsersComponent,
      nzWidth: '65%',
      nzCloseOnNavigation: true,
      nzContentParams: {
        dataTypeSend: this.typeData
      }
    })

    drawRef.afterClose.subscribe(() => {
      // this.getAlluser();
    })
  }

  // getAlluser() {
  //   this.userservice.getAlluser().then((res: any) => {
  //     this.listAlluser = res;
  //   });
  // }

  logout () {
    window.location.href = 'http://localhost:4200/login'
  }

  getAcc () {
    var token = localStorage.getItem('token') //สร้างตัวแปลมาเก็บ token ที่มาจาก storage
    this.decode = jwt_decode(token || '')
    console.log(this.decode.first_name)
  }
  // goCalender(){
  //   this.Router.navigate(['calender'])
  // }
}

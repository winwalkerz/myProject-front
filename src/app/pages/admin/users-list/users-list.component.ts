import { LeaveDetailComponent } from './../../../components/leave-detail/leave-detail.component';
import { UserService } from './../../../user.service';
import { NzDrawerService } from 'ng-zorro-antd/drawer';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css'],
})
export class UsersListComponent implements OnInit {
  listAlluser: any = [];
  dataDetailSendBefore: any;
  count: any;
  body = {
    page: 1,
    check: '',
  };
  
  constructor(
    private userservice: UserService,
    private nzdrawerservice: NzDrawerService
  ) {}

  ngOnInit(): void {
    // this.getAlluser(this.body);
  }
  // getAlluser(data: any) {
  //   console.log(this.body);
  //   this.userservice.getAlluser(data).then((res: any) => {
  //     this.listAlluser = res;
  //     this.count = res.count;
  //     console.log(this.count);
  //   });
  // }
  // refreshData(value: any) {
  //   this.dataDetailSendBefore = { ...value };
  //   this.openDetail();
  //   console.log(this.dataDetailSendBefore);
  // }
  // openDetail() {
  //   const drawRef = this.nzdrawerservice.create<
  //     LeaveDetailComponent,
  //     { dataDetailSendAfter: any }
  //   >({
  //     nzTitle: 'รายละเอียด',
  //     nzContent: LeaveDetailComponent,
  //     nzWidth: '65%',
  //     nzContentParams: {
  //       dataDetailSendAfter: this.dataDetailSendBefore,
  //     },
  //   });

  //   drawRef.afterClose.subscribe(() => {
  //     this.getAlluser(this.body);
  //   });
  // }
  // click($event: any) {
  //   this.body.page = $event;
  //   this.getAlluser(this.body);
  // }
}
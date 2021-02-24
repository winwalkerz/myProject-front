import { LeaveDetailComponent } from './../../../components/leave-detail/leave-detail.component';
import { HttpClient, HttpParams } from '@angular/common/http';
import { NzTableQueryParams } from 'ng-zorro-antd/table';
import { Observable } from 'rxjs';
import { UserService } from './../../../user.service';
import { NzDrawerService } from 'ng-zorro-antd/drawer';
import { Component, OnInit, Injectable } from '@angular/core';
@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css'],
})
export class UsersListComponent implements OnInit {

  listAlluser: any = [];
  isCollapsed = false;
  dataDetailSendBefore: any;
  count: any;
  page='1'
  constructor(
    private userservice: UserService,
    private nzdrawerservice: NzDrawerService
  ) {}

  ngOnInit(): void {
    this.getAlluser(this.page);
  }
  getAlluser(data:String) {
    this.userservice.getAlluser(data).then((res: any) => {
      this.listAlluser = res;
      this.count = res.count;
      console.log(this.count);
    });
  }
  refreshData(value: any) {
    this.dataDetailSendBefore = { ...value };
    this.openDetail();
    console.log(this.dataDetailSendBefore);
  }
  openDetail() {
    const drawRef = this.nzdrawerservice.create<
      LeaveDetailComponent,
      { dataDetailSendAfter: any }
    >({
      nzTitle: 'รายละเอียด',
      nzContent: LeaveDetailComponent,
      nzWidth: '65%',
      nzContentParams: {
        dataDetailSendAfter: this.dataDetailSendBefore,
      },
    });

    drawRef.afterClose.subscribe(() => {
      this.getAlluser(this.page);
    });
  }
  click($event: any) {
    
    this.page = $event;
    this.getAlluser(this.page);
  }
}
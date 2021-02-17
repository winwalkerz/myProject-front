import { LeaveDetailComponent } from './../../../components/leave-detail/leave-detail.component';
import { UserService } from './../../../user.service';
import { NzDrawerService } from 'ng-zorro-antd/drawer';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  listAlluser: any = [];
  isCollapsed = false;
  dataDetailSendBefore: any;
  constructor(
    private userservice: UserService,
    private nzdrawerservice: NzDrawerService
  ) {}

  ngOnInit(): void {
    this.getAlluser();
  }
  getAlluser() {
    this.userservice.getAlluser().then((res: any) => {
      this.listAlluser = res;
    });
  }
  refreshData(value: any) {
    this.dataDetailSendBefore = { ...value };
    this.openDetail();
    console.log(this.dataDetailSendBefore)
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
      this.getAlluser();
    });
  }
}
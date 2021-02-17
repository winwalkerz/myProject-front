import { CrudService } from './../../crud.service';
import { StatusService } from '../../status.service';
import { Component, OnInit } from '@angular/core';
import { NzDrawerRef } from 'ng-zorro-antd/drawer';

@Component({
  selector: 'app-leave-detail',
  templateUrl: './leave-detail.component.html',
  styleUrls: ['./leave-detail.component.css']
})
export class LeaveDetailComponent implements OnInit {

  constructor(
    private nzdrawerref: NzDrawerRef,
    private statusService: StatusService,
    private crud: CrudService
  ) { }

  dataDetailSendAfter: any = [];
  // data: any = [];
  statusData: any = [];

  ngOnInit(): void {
  }

  getStatus() {
    this.statusService.getStatus().then((res: any) => {
      this.statusData = res;
      // console.log(this.statusData.data);
    });
  }
  edit(id: any, data: any) {
    console.log("rdtrfygvhbjn:",id, data);
    this.crud
      .edit(id, data)
      .then(() => {
        this.nzdrawerref.close();
      })
      .catch((error: any) => {});
  }

}

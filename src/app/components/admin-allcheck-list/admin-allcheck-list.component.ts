import { NzMessageService } from 'ng-zorro-antd/message';
import { NzModalService } from 'ng-zorro-antd/modal';
import { CrudService } from './../../crud.service';
import { LeaveDetailComponent } from './../leave-detail/leave-detail.component';
import { NzDrawerService } from 'ng-zorro-antd/drawer';
import { UserService } from './../../user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-allcheck-list',
  templateUrl: './admin-allcheck-list.component.html',
  styleUrls: ['./admin-allcheck-list.component.css'],
})
export class AdminAllcheckListComponent implements OnInit {
  searchText: string = '';
  listAlluser: any = [];
  model_search = {
    search: '',
  };
  dataDetailSendBefore: any;
  count: any;
  body = {
    page: 1,
    check: '',
  };

  constructor(
    private userservice: UserService,
    private nzdrawerservice: NzDrawerService,
    private crud: CrudService,
    private modal: NzModalService,
    private nzMessageService: NzMessageService
  ) {}

  ngOnInit(): void {
    this.getAlluser(this.body);
    
  }
  getAlluser(data: any) {
    console.log(this.body);
    this.userservice.getAlluser(data).then((res: any) => {
      this.listAlluser = res.data;
      this.count = res.count;
      console.log(this.listAlluser)
      // console.log(this.count);
    });
  }
  refreshData(value: any) {
    this.dataDetailSendBefore = { ...value };
    this.openDetail();
    // console.log(this.dataDetailSendBefore);
  }
  openDetail() {
    const drawRef = this.nzdrawerservice.create<
      LeaveDetailComponent,
      { dataDetailSendAfter: any }
    >({
      nzTitle: 'รายละเอียด',
      nzContent: LeaveDetailComponent,
      nzWidth: '45%',
      nzContentParams: {
        dataDetailSendAfter: this.dataDetailSendBefore,
      },
    });

    drawRef.afterClose.subscribe(() => {
      this.getAlluser(this.body);
    });
  }
  click($event: any) {
    this.body.page = $event;
    this.getAlluser(this.body);
  }
  changeFilter() {
    console.log('running');
    this.crud.filter(this.model_search).then((res: any) => {
      this.listAlluser = res.data;
      this.count = res.count;
      console.log(this.listAlluser);
    });
  }

  showDeleteConfirm(id: any,data:any): void {
    this.modal
      .confirm({
        nzTitle: '<b>คำเตือน !!!</b>',
        nzContent: 'คุณเเน่ใจใช่ไหมว่าจะลบรายการนี้ ?',
        nzOkText: 'ยืนยัน',
        nzOkType: 'primary',
        nzOkDanger: true,
        nzOnOk: () => this.delUser(id),
        nzCancelText: 'ยกเลิก',
        nzOnCancel: () => console.log('Cancel'),
      })
      .afterClose.subscribe(() => {
        this.getAlluser(this.body);
      });
  }
  delUser(id: any) {
    this.crud.delete(id).then((res: any) => {});
    this.nzMessageService.success('Deleted');
    
  }
}
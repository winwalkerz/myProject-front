import { CrudService } from './../../crud.service';
import { StatusService } from '../../status.service';
import { Component, OnInit } from '@angular/core';
import { NzDrawerRef } from 'ng-zorro-antd/drawer';
import { NzMessageService} from 'ng-zorro-antd/message';
import { NzModalService } from 'ng-zorro-antd/modal';

@Component({
  selector: 'app-leave-detail',
  templateUrl: './leave-detail.component.html',
  styleUrls: ['./leave-detail.component.css']
})
export class LeaveDetailComponent implements OnInit {

  constructor(
    private nzdrawerref: NzDrawerRef,
    private statusService: StatusService,
    private crud: CrudService,
    private nzMessageService: NzMessageService,
    private modal: NzModalService,
  ) { }

  dataDetailSendAfter: any = [];
  // data: any = [];
  statusData: any = [];
  sumLeave:any = [];

  ngOnInit(): void {
    this.getSumLeave();
  }
  getSumLeave(){
    this.crud.getLeaveByID(this.dataDetailSendAfter.id_user_fk).then((res:any) =>{
      this.sumLeave = res.sumHoliday;
      // console.log(this.sumLeave);
    })
  }
  getStatus() {
    this.statusService.getStatus().then((res: any) => {
      this.statusData = res;
      // console.log(this.statusData.data.check);
    });
  }

  showEditConfirm(id: any, data:any): void {
    this.modal
      .confirm({
        nzTitle: '<b>คำเตือน</b>',
        nzContent: 'คุณต้องการยืนยันการดำเนินการหรือไม่?',
        nzOkText: 'ยืนยัน',
        nzOkType: 'primary',
        nzOkDanger: true,
        nzOnOk: () => this.edit(id, data),
        nzCancelText: 'ยกเลิก',
        nzOnCancel: () => console.log('Cancel'),
      })
      // .afterClose.subscribe(() => {
      //   this.memberList(id);
      // });
  }

  // 
    edit(id: any, data: any) {
    // console.log(id, data);
    this.dataDetailSendAfter.check='1'
    this.crud
      .editadmin(id, data)
      .then( () => {
        this.nzdrawerref.close();
        // location.reload() 
        this.nzMessageService.success('แก้ไขสำเร็จ');
      }).then(() => {
        
      
      })
      .catch((error: any) => {});
      
  }

  closeEdit(){
    this.nzdrawerref.close();
  }
}
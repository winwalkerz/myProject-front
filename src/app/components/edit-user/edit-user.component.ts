import { UserService } from './../../user.service';
import { NzDrawerRef } from 'ng-zorro-antd/drawer';
import { Component, OnInit } from '@angular/core';
import { NzMessageService} from 'ng-zorro-antd/message';
import { NzModalService } from 'ng-zorro-antd/modal';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css'],
})
export class EditUserComponent implements OnInit {
  edit: any;
  constructor(
    private userService: UserService,
    private nzDrawerRef: NzDrawerRef,
    private nzMessageService: NzMessageService,
    private modal: NzModalService,
  ) {}

  showEditConfirm(id: any, data:any): void {
    this.modal
      .confirm({
        nzTitle: '<b>คำเตือน</b>',
        nzContent: 'คุณเเน่ใจใช่ไหมว่าต้องการแก้ไขยูสเซอร์นี้?',
        nzOkText: 'ยืนยัน',
        nzOkType: 'primary',
        nzOkDanger: true,
        nzOnOk: () => this.editfunc(id, data),
        nzCancelText: 'ยกเลิก',
        nzOnCancel: () => console.log('Cancel'),
      })
      // .afterClose.subscribe(() => {
      //   this.memberList(id);
      // });
  }

  ngOnInit(): void {}
  editfunc(id: any, data: any) {
    this.userService
      .editUser(id, data)
      .then(() => {
        this.nzDrawerRef.close();
        this.nzMessageService.success('แก้ไขสำเร็จ');
      })
      .catch((error: any) => {});
  }

  closeEdit(){
    this.nzDrawerRef.close();
  }

  
}
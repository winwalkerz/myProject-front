import { UserService } from './../../../user.service';
import { AddUsersComponent } from './../../../components/add-users/add-users.component';
import { EditUserComponent } from './../../../components/edit-user/edit-user.component';

import { NzDrawerService } from 'ng-zorro-antd/drawer';
import { Component, OnInit } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css'],
})
export class MembersComponent implements OnInit {
  constructor(
    private nzdrawerservice: NzDrawerService,
    private users: UserService,
    private modal: NzModalService,
    private nzMessageService: NzMessageService,
  ) {}
  members: any = [];
  model_search = {
    page: 1,
    search: '',
  };
  memberCount = null;
  typeData: any;
  newData: any;
  ngOnInit(): void {
    this.memberList(this.model_search);
  }
  addUser() {
    const drawRef = this.nzdrawerservice.create<
      AddUsersComponent,
      { dataTypeSend: any }
    >({
      nzTitle: 'เพิ่ม User',
      nzContent: AddUsersComponent,
      nzWidth: '35%',
      nzCloseOnNavigation: true,
      nzContentParams: {
        dataTypeSend: this.typeData,
      },
    });

    drawRef.afterClose.subscribe(() => {
      this.memberList(this.model_search);
    });
  }
  memberList(data: any) {
    this.users.memberList(this.model_search).then((res: any) => {
      this.members = res.data;
      this.memberCount = res.count;
      console.log('member : ', this.members);
      console.log('member : ', this.members);
    });
  }
  click($event: any) {
    this.model_search.page = $event;
    this.memberList(this.model_search);
  }

  //เอาข้อมูลมาเปลี่ยนก่อนส่งไป edit
  reData(data: any) {
    this.newData = { ...data };
    this.editUsers();
  }

  //edit users
  editUsers() {
    const drawRefEdit = this.nzdrawerservice.create<
      EditUserComponent,
      { edit: any }
    >({
      nzTitle: 'แก้ไข User',
      nzContent: EditUserComponent,
      nzWidth: '65%',
      nzCloseOnNavigation: true,
      nzContentParams: {
        edit: this.newData,
      },
    });
    drawRefEdit.afterClose.subscribe(() => {
      this.memberList(this.model_search);
    });
  }

  showDeleteConfirm(id: any): void {
    this.modal
      .confirm({
        nzTitle: '<b>คำเตือน !!!</b>',
        nzContent: 'คุณเเน่ใจใช่ไหมว่าจะลบยูสเซอร์นี้ ?',
        nzOkText: 'ยืนยัน',
        nzOkType: 'primary',
        nzOkDanger: true,
        nzOnOk: () => this.delUser(id),
        nzCancelText: 'ยกเลิก',
        nzOnCancel: () => console.log('Cancel'),
      })
      .afterClose.subscribe(() => {
        this.memberList(id);
      });
  }
  
  delUser(id: any) {
    this.users.deleteUser(id).then((res: any) => {});
    this.nzMessageService.success('Deleted');
    this.memberList(this.model_search);
  }
}
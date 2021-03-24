import { UserEditorComponent } from './../../../components/user-editor/user-editor.component';
import { UserService } from './../../../user.service';
import { AddUsersComponent } from './../../../components/add-users/add-users.component';
import { NzDrawerRef } from 'ng-zorro-antd/drawer';
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
    private nzMessageService: NzMessageService // private nzDrawerRef:NzDrawerRef
  ) {}
  members: any = [];
  alert: any = [];
  passwordVisible = false;
  model_search = {
    page: 1,
    search: '',
  };

  memberCount = null;
  typeData: any;
  newData: any = [];
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
      nzWidth: '40%',
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
      // console.log('member : ', this.members);
      // console.log('member : ', this.members);
    });
  }
  click($event: any) {
    this.model_search.page = $event;
    this.memberList(this.model_search);
  }

  //เอาข้อมูลมาเปลี่ยนก่อนส่งไป edit
  // reData(data: any) {
  //   this.newData = { ...data };
  //   console.log(this.newData)
  //   this.open(this.newData);
  // }

  //edit users
  // editUsers() {
  // const drawRefEdit = this.nzdrawerservice.create<
  //   UserEditorComponent,
  //   { edits: any }
  // >({
  //   nzTitle: 'แก้ไข User',
  //   nzContent: UserEditorComponent,
  //   nzWidth: '65%',
  //   nzCloseOnNavigation: true,
  //   nzContentParams: {
  //     edits: this.newData,
  //   },
  // });
  // drawRefEdit.afterClose.subscribe(() => {
  //   this.memberList(this.model_search);
  // });
  // }

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

  visible = false;

  open(item: any) {
    this.visible = true;
    this.newData = { ...item };
    console.log(this.newData);
  }

  showEditConfirm(id: any, data: any): void {
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
      .afterClose.subscribe(() => {
      });
  }
  editfunc(id: any, data: any) {
    this.users
      .editUser(id, data)
      .then(() => {
        this.visible = false;
        this.memberList(this.model_search);
        this.nzMessageService.success('แก้ไขสำเร็จ');
      })
      .catch((err) => {
        this.alert = err
        this.nzMessageService.error(err.error.message);
        console.log(this.alert);
      });
  }

  closeEdit() {
    this.visible = false;
  }
}

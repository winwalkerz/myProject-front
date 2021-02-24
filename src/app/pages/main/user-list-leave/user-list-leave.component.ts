import { CrudService } from './../../../crud.service';
import { UserService } from './../../../user.service';
import { AddLeaveComponent } from './../../../components/add-leave/add-leave.component';
import { EditLeaveComponent } from './../../../components/edit-leave/edit-leave.component';
import { Component, OnInit } from '@angular/core';
import { NzDrawerService } from 'ng-zorro-antd/drawer';
import { NzModalService } from 'ng-zorro-antd/modal';
@Component({
  selector: 'app-user-list-leave',
  templateUrl: './user-list-leave.component.html',
  styleUrls: ['./user-list-leave.component.css'],
})
export class UserListLeaveComponent implements OnInit {

  
  data: any;
  dataForEdit: any;
  typeData: any = [];
  list_data: any;

  
  listorder: any = [];

  constructor(
    private nzDrawerService: NzDrawerService, //ประกาศตัวแปลเพื่อมาใช้งาน
    private userService: UserService,
    private crud: CrudService,
    private modal:NzModalService
  ) {}

  ngOnInit(): void {
    this.showData();
    console.log()
  }

  //แสดข้อมูลของ user
  showData() {
    this.userService.getOrderByID().then((res: any) => {
      this.listorder = res;
    });
  }

  

  //เพิ่มการลางานของ user
  addLeave() {
    const drawRef = this.nzDrawerService.create<
      AddLeaveComponent,
      { dataTypeSend: any }
    >({
      nzTitle: 'เพิ่มรายการลางาน',
      nzContent: AddLeaveComponent,
      nzWidth: '65%',
      nzContentParams: {
        dataTypeSend: this.typeData,
      },
    });

    drawRef.afterClose.subscribe(() => {
      this.showData();
    });
  }

  //แก้ไขการลางานของ user
  //เปลี่ยนชุดข้อมูลที่จะแก้ไข
  reData(value: any) {
    this.dataForEdit = { ...value };
    this.onClickEdit();
  }
  //เปิด drawer ข้อมูลที่จะแก้ไขของ user
  onClickEdit() {
    const drawRef = this.nzDrawerService.create<
      EditLeaveComponent,
      { dataEditSend: any }
    >({
      nzTitle: 'แก้ไขรายการลางาน',
      nzContent: EditLeaveComponent,
      nzWidth: '65%',
      nzContentParams: {
        dataEditSend: this.dataForEdit,
      },
    });
    drawRef.afterClose.subscribe(() => {
      this.showData();
    });
  }

  deleteLeave(id: any) {
    this.crud.delete(id).then(() => {});
    this.showData();
  }

  showDeleteConfirm(id: any): void {
    this.modal.confirm({
      nzTitle: '<b>คำเตือน !!!</b>',
      nzContent: 'คุณเเน่ใจใช่ไหมว่าจะลบการลางานนี้ ?',
      nzOkText: 'Yes',
      nzOkType: 'primary',
      nzOkDanger: true,
      nzOnOk: () => this.deleteLeave(id),
      nzCancelText: 'No',
      nzOnCancel: () => console.log('Cancel')
    }).afterClose.subscribe(() => {
      this.showData();
    })
  }
}


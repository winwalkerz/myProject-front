import jwt_decode from 'jwt-decode'
import { CrudService } from './../../../crud.service'
import { UserService } from './../../../user.service'
import { AddLeaveComponent } from './../../../components/add-leave/add-leave.component'
import { EditLeaveComponent } from './../../../components/edit-leave/edit-leave.component'
import { Component, OnInit } from '@angular/core'
import { NzDrawerService } from 'ng-zorro-antd/drawer'
import { NzModalService } from 'ng-zorro-antd/modal'
import { NzMessageService } from 'ng-zorro-antd/message'
import { Router } from '@angular/router'

@Component({
  selector: 'app-user-list-leave',
  templateUrl: './user-list-leave.component.html',
  styleUrls: ['./user-list-leave.component.css']
})
export class UserListLeaveComponent implements OnInit {
  data: any
  dataForEdit: any
  typeData: any = []
  list_data: any
  decode: any
  listorder: any = []
  count: any
  allcount = 0
  lastallcount = 0

  constructor (
    private nzDrawerService: NzDrawerService, //ประกาศตัวแปลเพื่อมาใช้งาน
    private userService: UserService,
    private crud: CrudService,
    private modal: NzModalService,
    private nzMessageService: NzMessageService,
    private router: Router
  ) {}

  ngOnInit (): void {
    this.showData()

    var token = localStorage.getItem('token') //สร้างตัวแปลมาเก็บ token ที่มาจาก storage
    this.decode = jwt_decode(token || '')
    // console.log(this.decode);
  }
  calculated (item: any) {
    this.allcount = 0
    for (let i = 0; i < item; i++) {
      this.allcount += this.listorder[i].allday
      console.log(this.listorder[i].allday)
    }
    this.lastallcount = this.decode.max_days - this.allcount
    console.log(this.lastallcount)
  }
  //แสดข้อมูลของ user
  showData () {
    this.userService.getOrderByID().then((res: any) => {
      this.listorder = res.data
      this.count = res.count

      this.calculated(this.count)
      // this.decode = this.listorder[0].max_days
    })
  }

  //เพิ่มการลางานของ user
  addLeave () {
    const drawRef = this.nzDrawerService.create<
      AddLeaveComponent,
      { dataTypeSend: any }
    >({
      nzTitle: 'เพิ่มรายการลางาน',
      nzContent: AddLeaveComponent,
      nzWidth: '65%',
      nzContentParams: {
        dataTypeSend: this.typeData
      }
    })

    drawRef.afterClose.subscribe(() => {
      this.showData()
    })
  }

  //แก้ไขการลางานของ user
  //เปลี่ยนชุดข้อมูลที่จะแก้ไข
  reData (value: any) {
    this.dataForEdit = { ...value }
    this.onClickEdit()
  }
  //เปิด drawer ข้อมูลที่จะแก้ไขของ user
  onClickEdit () {
    const drawRef = this.nzDrawerService.create<
      EditLeaveComponent,
      { dataEditSend: any }
    >({
      nzTitle: 'แก้ไขรายการลางาน',
      nzContent: EditLeaveComponent,
      nzWidth: '65%',
      nzContentParams: {
        dataEditSend: this.dataForEdit
      }
    })
    drawRef.afterClose.subscribe(() => {
      this.showData()
    })
  }

  deleteLeave (id: any, data: any) {
    this.crud.delete(id, data).then(() => {})
    this.nzMessageService.success('Deleted')
    this.showData()
  }

  showDeleteConfirm (id: any, data: any): void {
    this.modal
      .confirm({
        nzTitle: '<b>คำเตือน !!!</b>',
        nzContent: 'คุณเเน่ใจใช่ไหมว่าจะลบการลางานนี้ ?',
        nzOkText: 'Yes',
        nzOkType: 'primary',
        nzOkDanger: true,
        nzOnOk: () => this.deleteLeave(id, data),
        nzCancelText: 'No',
        nzOnCancel: () => console.log('Cancel')
      })
      .afterClose.subscribe(() => {
        this.showData()
      })
  }

  // go to calendar
  goCalender () {
    this.router.navigate(['main/calendar'])
  }
  createMessage (type: string): void {
    this.nzMessageService.create(
      type,
      'ไม่สามารถแก้ไขได้ เนื่องจากได้รับการตรวจสอบแล้ว'
    )
  }
}

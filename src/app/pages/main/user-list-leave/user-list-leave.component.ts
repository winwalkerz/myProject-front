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
  sumLeave: any = []
  model_search = {
    page: 1,
    search: ''
  }
  constructor (
    private nzDrawerService: NzDrawerService, //ประกาศตัวแปลเพื่อมาใช้งาน
    private userService: UserService,
    private crud: CrudService,
    private modal: NzModalService,
    private nzMessageService: NzMessageService,
    private router: Router
  ) {}

  ngOnInit (): void {
    this.showData(this.model_search)

    var token = localStorage.getItem('token') //สร้างตัวแปลมาเก็บ token ที่มาจาก storage
    this.decode = jwt_decode(token || '')
    console.log(this.decode);
    this.sumleave();
  }
  calculated (item: any) {
    this.allcount = 0
    for (let i = 0; i < item; i++) {
      this.allcount += this.listorder[i].allday
      // console.log(this.listorder[i].allday)
    }
    this.lastallcount = this.decode.max_days - this.allcount
    // console.log(this.lastallcount)
  }
  //แสดข้อมูลของ user
  showData (data: any) {
    this.userService.getOrderByID(this.model_search).then((res: any) => {
      this.listorder = res.data
      this.count = res.count
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
      nzWidth: '45%',
      nzContentParams: {
        dataTypeSend: this.typeData
      }
    })

    drawRef.afterClose.subscribe(() => {
      this.showData(this.model_search)
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
      nzWidth: '45%',
      nzContentParams: {
        dataEditSend: this.dataForEdit
      }
    })
    drawRef.afterClose.subscribe(() => {
      this.showData(this.model_search)
    })
  }

  deleteLeave (id: any, data: any) {
    this.crud.delete(id, data).then(() => {})
    this.nzMessageService.success('ลบรายการลางานสำเร็จ')
    this.showData(this.model_search)
  }

  showDeleteConfirm (id: any, data: any): void {
    this.modal
      .confirm({
        nzTitle: '<b>คำเตือน !!!</b>',
        nzContent: 'คุณเเน่ใจใช่ไหมว่าจะลบการลางานนี้ ?',
        nzOkText: 'ยืนยัน',
        nzOkType: 'primary',
        nzOkDanger: true,
        nzOnOk: () => this.deleteLeave(id, data),
        nzCancelText: 'ยกเลิก',
        nzOnCancel: () => console.log('Cancel')
      })
      .afterClose.subscribe(() => {
        this.showData(this.model_search)
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
  createMessage2 (type: string): void {
    this.nzMessageService.create(
      type,
      'ไม่สามารถลบได้ เนื่องจากได้รับการตรวจสอบแล้ว'
    )
  }

  click ($event: any) {
    this.model_search.page = $event
    this.showData(this.model_search)
  }

  sumleave () {
    this.crud.getLeaveByID(this.decode.id).then((res: any) => {
      this.sumLeave = res.sumHoliday
      console.log(this.sumLeave)
    })
  }
}

import jwt_decode from 'jwt-decode'
import { UserService } from './../../../user.service'
import { AddUsersComponent } from './../../../components/add-users/add-users.component'
import { NzDrawerService } from 'ng-zorro-antd/drawer'
import { Component, OnInit } from '@angular/core'
import { NzModalService } from 'ng-zorro-antd/modal'
import { NzMessageService } from 'ng-zorro-antd/message'
@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {
  constructor (
    private nzdrawerservice: NzDrawerService,
    private users: UserService,
    private modal: NzModalService,
    private nzMessageService: NzMessageService // private nzDrawerRef:NzDrawerRef
  ) {}
  showPortal = false
  passs: any = []
  members: any = []
  alert: any = []
  passwordVisible = false
  model_search = {
    page: 1,
    search: ''
  }
  memberCount = null
  typeData: any
  newData: any = []
  encryptSecretKey =
    '6a2da20943931e9834fc12cfe5bb47bbd9ae43489a30726962b576f4e3993e50'
  test = '9ca1a71a91da5ca07467e8ff24cac6c6'
  ngOnInit (): void {
    this.memberList(this.model_search)
  }
  addUser () {
    const drawRef = this.nzdrawerservice.create<
      AddUsersComponent,
      { dataTypeSend: any }
    >({
      nzTitle: 'เพิ่ม User',
      nzContent: AddUsersComponent,
      nzWidth: '40%',
      nzCloseOnNavigation: true,
      nzContentParams: {
        dataTypeSend: this.typeData
      }
    })

    drawRef.afterClose.subscribe(() => {
      this.memberList(this.model_search)
    })
  }
  memberList (data: any) {
    this.users.memberList(this.model_search).then((res: any) => {
      this.members = res.data
      this.memberCount = res.count
      this.passs = res.password
      console.log('member : ', this.passs)
      // console.log('member : ', this.members);
    })
  }
  click ($event: any) {
    this.model_search.page = $event
    this.memberList(this.model_search)
  }

  showDeleteConfirm (id: any): void {
    this.modal
      .confirm({
        nzTitle: '<b>คำเตือน !!!</b>',
        nzContent: 'คุณเเน่ใจใช่ไหมว่าจะลบยูสเซอร์นี้ ?',
        nzOkText: 'ยืนยัน',
        nzOkType: 'primary',
        nzOkDanger: true,
        nzOnOk: () => this.delUser(id),
        nzCancelText: 'ยกเลิก',
        nzOnCancel: () => console.log('Cancel')
      })
      .afterClose.subscribe(() => {
        this.memberList(id)
      })
  }

  delUser (id: any) {
    this.users.deleteUser(id).then((res: any) => {})
    this.nzMessageService.success('Deleted')
    this.memberList(this.model_search)
  }

  visible = false

  open (item: any) {
    this.newData = { ...item }
    // this.newData.password = this.decryptData(this.newData.password)
    console.log(this.newData.password)
    this.visible = true
  }

  showEditConfirm (id: any, data: any): void {
    this.modal
      .confirm({
        nzTitle: '<b>คำเตือน</b>',
        nzContent: 'คุณเเน่ใจใช่ไหมว่าต้องการแก้ไขยูสเซอร์นี้?',
        nzOkText: 'ยืนยัน',
        nzOkType: 'primary',
        nzOkDanger: true,
        nzOnOk: () => this.editfunc(id, data),
        nzCancelText: 'ยกเลิก',
        nzOnCancel: () => console.log('Cancel')
      })
      .afterClose.subscribe(() => {
        this.memberList(this.model_search)
      })
  }
  editfunc (id: any, data: any) {
    this.users
      .editUser(id, data)
      .then(() => {
        this.visible = false
        this.memberList(this.model_search)
        this.nzMessageService.success('แก้ไขสำเร็จ')
      })
      .catch(err => {
        this.alert = err
        this.nzMessageService.error(err.error.message)
        this.visible = true
        console.log(this.alert)
      })
  }

  closeEdit () {
    this.visible = false
  }

  // ------------------------------------------------------------------open Detail function ----------------------------------------------
  openDetail (id: any) {
    window.open(`/admin/member-details/${id}`)
  }


}

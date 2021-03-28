import { AddHolidayComponent } from './../../../components/add-holiday/add-holiday.component';
import { HolidayService } from './../../../holiday.service'
import { Component, OnInit } from '@angular/core'
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzModalService } from 'ng-zorro-antd/modal'

@Component({
  selector: 'app-manage-vacation',
  templateUrl: './manage-vacation.component.html',
  styleUrls: ['./manage-vacation.component.css']
})
export class ManageVacationComponent implements OnInit {
  constructor (
    private holidayService: HolidayService,
    private nzmodalService: NzModalService,
    private modal: NzModalService,
    private msg:NzMessageService
  ) {}
  visible = false;
  newData: any = []
  model_search = {
    search: '',
    page: 1
  }
  dataHoliday:any;
  ngOnInit (): void {
    this.searchHoliday();
  }
  searchHoliday () {
    this.holidayService.search(this.model_search).then((res: any) => {
      this.dataHoliday = res.data
      console.log(this.dataHoliday)
    })
  }

  addHoliday(){
    const drawRef = this.nzmodalService.create({
      nzTitle: 'เพิ่มวันหยุด',
      nzContent: AddHolidayComponent,
      nzWidth: '35%',
      nzFooter: null,
      // nzComponentParams: {
      //   date: data,
      // },
    });
    drawRef.afterClose.subscribe(() => {
      this.searchHoliday();
    });
  }

  showDeleteConfirm (id: any): void {
    this.modal
      .confirm({
        nzTitle: '<b>คำเตือน !!!</b>',
        nzContent: 'คุณแน่ใจใช่ไหมจะลบวันหยุดนี้ ?',
        nzOkText: 'ยืนยัน',
        nzOkType: 'primary',
        nzOkDanger: true,
        nzOnOk: () => this.delHoliday(id),
        nzCancelText: 'ยกเลิก',
        nzOnCancel: () => console.log('Cancel')
      })
      .afterClose.subscribe(() => {
        this.searchHoliday();(id)
      })
  }

  delHoliday (id: any) {
    this.holidayService.deleteHoliday(id).then((res: any) => {})
    this.msg.success('Deleted')
  }


  

  open (item: any) {
    this.visible = true
    this.newData = { ...item }
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
        this.visible = false
        this.searchHoliday();(id)
      })
  }
   editfunc(id: any, data: any) {
    this.holidayService
      .editHoliday(id, data)
      .then(() => {
        this.visible = false;
        this.searchHoliday();(id)
        this.msg.success('แก้ไขสำเร็จ');
      })
      .catch((err) => {
        this.msg.error(err.error.message);
        this.visible = true
      });
  }

}

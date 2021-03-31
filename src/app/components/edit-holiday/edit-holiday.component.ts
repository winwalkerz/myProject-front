import { Component, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzModalService } from 'ng-zorro-antd/modal';
import { HolidayService } from 'src/app/holiday.service';

@Component({
  selector: 'app-edit-holiday',
  templateUrl: './edit-holiday.component.html',
  styleUrls: ['./edit-holiday.component.css']
})
export class EditHolidayComponent implements OnInit {

  constructor(
    private holidayService: HolidayService,
    private modal: NzModalService,
    private msg:NzMessageService
  ) { }

  ngOnInit(): void {
  }

  visible = false;
  model_search = {
    search: '',
    page: 1
  }
  dataHoliday:any;
  newData: any = []

  onChange (result: Date): void {
    console.log('onChange: ', result)
  }

  searchHoliday () {
    this.holidayService.search(this.model_search).then((res: any) => {
      this.dataHoliday = res.data
      console.log(this.dataHoliday)
    })
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

  cancel() {
    this.visible = false
  }

}

import { Component, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzModalService } from 'ng-zorro-antd/modal';
import { NzDatePickerComponent } from 'ng-zorro-antd/date-picker';
import { HolidayService } from 'src/app/holiday.service';
import { NzDrawerRef } from 'ng-zorro-antd/drawer';

@Component({
  selector: 'app-edit-holiday',
  templateUrl: './edit-holiday.component.html',
  styleUrls: ['./edit-holiday.component.css']
})
export class EditHolidayComponent implements OnInit {

  constructor(
    private holidayService: HolidayService,
    private modal: NzModalService,
    private msg:NzMessageService,
    private nzDrawerRef: NzDrawerRef,
  ) { }

  ngOnInit(): void {
    console.log(this.dataEditSend)
  }
  dataEditSend: any;

  visible = false;
  model_search = {
    search: '',
    page: 1
  }
  dataHoliday:any;
  

  onChange (result: Date): void {
    console.log('onChange: ', result)
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
      })
  }
   editfunc(id: any, data: any) {
    this.holidayService
      .editHoliday(id, data)
      .then(() => {
        this.nzDrawerRef.close();
        this.msg.success('แก้ไขสำเร็จ');
      })
      .catch((err) => {
        this.msg.error(err.error.message);
        this.visible = true
      });
  }

  cancel() {
    this.nzDrawerRef.close();
  }

}

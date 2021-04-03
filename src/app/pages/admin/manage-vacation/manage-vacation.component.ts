import { AddHolidayComponent } from './../../../components/add-holiday/add-holiday.component';
import { HolidayService } from './../../../holiday.service'
import { Component, OnInit } from '@angular/core'
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzModalService } from 'ng-zorro-antd/modal'
import { NzDrawerService } from 'ng-zorro-antd/drawer';
import { EditHolidayComponent } from 'src/app/components/edit-holiday/edit-holiday.component';

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
    private msg:NzMessageService,
    private nzDrawerService: NzDrawerService
  ) {}
  visible = false;
  newData: any = []
  model_search = {
    search: '',
    page: 1
  }
  listholiday: any = []
  dataHoliday:any;

  ngOnInit (): void {
    this.searchHoliday(this.model_search);
  }
  searchHoliday (data: any) {
    this.holidayService.search(this.model_search).then((res: any) => {
      this.dataHoliday = res.data
      // console.log(this.dataHoliday)
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
      this.searchHoliday(this.model_search);
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
        this.searchHoliday(this.model_search);(id)
      })
  }

  delHoliday (id: any) {
    this.holidayService.deleteHoliday(id).then((res: any) => {})
    this.msg.success('Deleted')
  }

  reData (value: any) {
    this.newData = { ...value }
    this.onClickEdit()
    console.log(this.newData)
  }
    onClickEdit(){
      const drawRef = this.nzDrawerService.create<
        EditHolidayComponent,
        { dataEditSend: any }
      >({
        nzTitle: 'แก้ไขวันหยุด',
        nzContent: EditHolidayComponent,
        nzWidth: '45%',
        nzContentParams: {
          dataEditSend: this.newData
        }
      })
      drawRef.afterClose.subscribe(() => {
        this.searchHoliday(this.model_search);
      })
    }

   

  }





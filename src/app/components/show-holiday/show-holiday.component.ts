import { AddHolidayComponent } from './../add-holiday/add-holiday.component';
import { NzModalService } from 'ng-zorro-antd/modal';
import { HolidayService } from './../../holiday.service'
import { Component, OnInit, Input } from '@angular/core'
import * as moment from 'moment'

@Component({
  selector: 'app-show-holiday',
  templateUrl: './show-holiday.component.html',
  styleUrls: ['./show-holiday.component.css']
})
export class ShowHolidayComponent implements OnInit {
  @Input() date: any
  dataHoliday: any
  model_search={
    search:'',
    page: 1
  }
  constructor (private holidayService: HolidayService,
    private nzmodalService:NzModalService) {}

  ngOnInit (): void {
    // this.searchHoliday()
  }
  //แสดงวันหยุด---------------------------------------------------------------------------------
  // searchHoliday () {
  //   //เปลี่ยน format ของวันที่เพื่อนำไปค้นหาข้อมูล
  //   let date2 = moment(this.date).format('YYYY-MM-DD')
  //   console.log(date2)
  //   this.model_search.search = date2
  //   // this.model_search.search = this.model_search.search.slice(8,10)
  //   this.holidayService.search(this.model_search).then((res: any) => {
  //     this.dataHoliday = res.data
  //     console.log(this.dataHoliday)
  //   })
  // }
  //ส่งวันที่ไปเพิ่มวันหยุด--------------------------------------------------------------------------
  // addHoliday(data:any){
  //   const drawRef = this.nzmodalService.create({
  //     nzTitle: 'เพิ่มวันหยุด',
  //     nzContent: AddHolidayComponent,
  //     nzWidth: '45%',
  //     nzFooter: null,
  //     nzComponentParams: {
  //       date: data,
  //     },
  //   });
  //   drawRef.afterClose.subscribe(() => {
  //     this.searchHoliday();
  //   });
  // }
}

import { AddHolidayComponent } from './../../../components/add-holiday/add-holiday.component';
import { NzModalService } from 'ng-zorro-antd/modal'
import { HolidayService } from './../../../holiday.service'
import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-manage-vacation',
  templateUrl: './manage-vacation.component.html',
  styleUrls: ['./manage-vacation.component.css']
})
export class ManageVacationComponent implements OnInit {
  constructor (
    private holidayService: HolidayService,
    private nzmodalService: NzModalService
  ) {}
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
}

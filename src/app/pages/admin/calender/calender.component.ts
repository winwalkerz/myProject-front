import { AddHolidayComponent } from './../../../components/add-holiday/add-holiday.component';
import { Component, OnInit } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';
@Component({
  selector: 'app-calender',
  templateUrl: './calender.component.html',
  styleUrls: ['./calender.component.css'],
})
export class CalenderComponent implements OnInit {
  constructor(private nzModalService: NzModalService) {}

  ngOnInit(): void {}
  selectedValue = new Date();
  value = String;
  selectChange(select: Date) {
    // console.log(`Select value: ${select}`);
    const datestr = select.toDateString();
    console.log(datestr)
    this.addHoliday(datestr);
  }

  // open modal add holiday component
  addHoliday(data: any): void {
    const drawRef = this.nzModalService.create<
      AddHolidayComponent,
      { value: any }
    >({
      nzTitle: 'เพิ่มวันหยุด',
      nzContent: AddHolidayComponent,
      nzWidth: '65%',
      nzFooter: null,
      nzComponentParams: {
        value: data,
      },
    });
    drawRef.afterClose.subscribe(() => {});
  }

  
}
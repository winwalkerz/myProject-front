import { NzModalRef } from 'ng-zorro-antd/modal';
import { HolidayService } from './../../holiday.service';
import { Component, OnInit, Input } from '@angular/core';
@Component({
  selector: 'app-add-holiday',
  templateUrl: './add-holiday.component.html',
  styleUrls: ['./add-holiday.component.css'],
})
export class AddHolidayComponent implements OnInit {
  @Input() value?: any;
  valueHoliday = {
    id: '',
    content: '',
    date: '',
  };

  // @Input() subtitle?: string;
  constructor(private holy: HolidayService, private nzModalRef: NzModalRef) {}

  ngOnInit(): void {
    this.valueHoliday.date = this.value;
  }
  isVisible = false;
  isOkLoading = false;

  // showModal(): void {
  //   this.isVisible = true;
  // }

  createHolidayy(data: any) {
    this.holy.createHoliday(data).then((res: any) => {
      this.nzModalRef.close();
    });
  }
}
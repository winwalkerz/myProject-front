import { NzMessageService } from 'ng-zorro-antd/message';
import { NzModalRef } from 'ng-zorro-antd/modal';
import { HolidayService } from './../../holiday.service';
import { Component, OnInit, Input } from '@angular/core';
@Component({
  selector: 'app-add-holiday',
  templateUrl: './add-holiday.component.html',
  styleUrls: ['./add-holiday.component.css'],
})
export class AddHolidayComponent implements OnInit {
  @Input() date: any;
  valueHoliday = {
    id: '',
    content: '',
    type:'',
    date:Object
  };

  // @Input() subtitle?: string;
  constructor(private holy: HolidayService, private nzModalRef: NzModalRef,
               private NzMessageService: NzMessageService ) {}

  ngOnInit(): void {
    this.valueHoliday.date = this.date
    // console.log(this.valueHoliday.date)
  }
  isVisible = false;
  isOkLoading = false;

  // showModal(): void {
  //   this.isVisible = true;
  // }

  createHolidayy(data: any) {
    this.holy.createHoliday(data).then((res: any) => {
      this.NzMessageService.success('Add Success');
      this.nzModalRef.close();
    });
  }
}
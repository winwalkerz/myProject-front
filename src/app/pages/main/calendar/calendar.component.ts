import { HolidayService } from './../../../holiday.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css'],
})
export class CalendarComponent implements OnInit {
  constructor(private holyService: HolidayService) {}

  ngOnInit(): void {
    this.getHoloday();
  }
  holyData: any = [];
  daystr: any = [];
  monthstr: any = [];
  dayint: any = [];
  monthint: any = [];
  counts: any = [];

  getHoloday() {
    this.holyService.getHoliday().then((res: any) => {
      this.holyData = res;
      this.querys(this.holyData.count);
      
    });
  }

  querys(count: any) {
    //ส่ง count มาจาก holyData.count ---> method getHoliday

    // console.log(count)
    var i;
    // var day=[]      //เก็บวันที่
    for (i = 0; i < count; i++) {
      this.daystr[i] = this.holyData.data[i].date.slice(8, 10);
      this.dayint[i] = parseInt(this.daystr[i]);
      this.monthstr[i] = this.holyData.data[i].date.slice(5, 7);
      this.monthint[i] = parseInt(this.monthstr[i]);
    }
    for (i = 0; i < count; i++) {
      this.monthint[i] += -1;
      this.counts[i] = i;
      console.log(
        this.counts[i],
        'Month:',
        this.monthint[i],
        'Day:',
        this.dayint[i]
      );
      console.log(this.holyData.data[0].type);
    }
    // console.log(this.dayint);
  }
}
import { HolidayService } from './../../../holiday.service';
import { AddHolidayComponent } from './../../../components/add-holiday/add-holiday.component';
import { Component, OnInit } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';
@Component({
  selector: 'app-calender',
  templateUrl: './calender.component.html',
  styleUrls: ['./calender.component.css'],
})
export class CalenderComponent implements OnInit {
  constructor(
    private nzModalService: NzModalService,
    private holyService: HolidayService
  ) {}
  selectedValue = new Date();
  datetime = new Date();
  holyData: any = [];
  ngOnInit(): void {
    this.getHoloday();
    // var dd=this.holyData.data.length
    // console.log(this.selectedValue)
  }

  //------------------------------select day on calender------------------------------

  selectChange(select: Date) {
    this.datetime = select;
    // console.log(this.datetime)
  }
  //------------------------------------------------------------------------------------------

  // ------------------------------open modal add holiday component------------------------------
  addHoliday(data: Date): void {
    // console.log(data)
    const drawRef = this.nzModalService.create({
      nzTitle: 'เพิ่มวันหยุด',
      nzContent: AddHolidayComponent,
      nzWidth: '45%',
      nzFooter: null,
      nzComponentParams: {
        date: data,
      },
    });
    drawRef.afterClose.subscribe(() => {
      this.getHoloday();
    });
  } //------------------------------------------------------------------------------------------

  //------------------------------get data holiday from back-end--------------------------------------
  getHoloday() {
    this.holyService.getHoliday().then((res: any) => {
      this.holyData = res;
      this.querys(this.holyData.count);
      // console.log(this.holyData.count);
      // console.log(this.holyData[0]);
      // console.log(this.holyData.data);
      // var daydate = this.holyData.data[1].date.getDate()
      // console.log(daydate);
    });
  } //------------------------------------------------------------------------------------------

  //-----------------function CALENDER -----------------------------------------------------

  //--------------------------------------query data ---------------------------------------
  daystr: any = [];
  monthstr: any = [];
  dayint: any = [];
  monthint: any = [];
  counts: any = [];
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
import { Component, OnInit, ViewChild } from '@angular/core';
import { NzDatePickerComponent } from 'ng-zorro-antd/date-picker';


@Component({
  selector: 'app-edit-leave',
  templateUrl: './edit-leave.component.html',
  styleUrls: ['./edit-leave.component.css'],
})
export class EditLeaveComponent implements OnInit {
  dataEditSend: any;
  constructor() {}

  ngOnInit(): void {}
  edit(){
    
  }
  ///////////////////////////////// date ////////////////////////////////////
  startValue: Date | null = null;
  endValue: Date | null = null;
  @ViewChild('endDatePicker') endDatePicker!: NzDatePickerComponent;
  disabledStartDate = (startValue: Date): boolean => {
    if (!startValue || !this.endValue) {
      return false;
    }
    return startValue.getDate() > this.endValue.getDate();
  };

  disabledEndDate = (endValue: Date): boolean => {
    if (!endValue || !this.startValue) {
      return false;
    }
    return endValue.getDate() <= this.startValue.getDate();
  };

  handleStartOpenChange(open: boolean): void {
    if (!open) {
      this.endDatePicker.open();
    }
    console.log('handleStartOpenChange', open);
  }

  handleEndOpenChange(open: boolean): void {
    console.log('handleEndOpenChange', open);
  }
}
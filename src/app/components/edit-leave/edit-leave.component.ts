import { NzDrawerRef } from 'ng-zorro-antd/drawer';
import { CrudService } from './../../crud.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NzDatePickerComponent } from 'ng-zorro-antd/date-picker';
import { NzMessageService} from 'ng-zorro-antd/message';
@Component({
  selector: 'app-edit-leave',
  templateUrl: './edit-leave.component.html',
  styleUrls: ['./edit-leave.component.css'],
})
export class EditLeaveComponent implements OnInit {
  
  dataEditSend: any;
  allday = 0

  
 
  constructor(
    private crudService: CrudService,
    private nzDrawerRef: NzDrawerRef,
    private nzMessageService: NzMessageService,
  ) {}

  ngOnInit(): void {
    console.log(this.dataEditSend);
  }

  //  ---------------------edit button---------------------------------
  edit(id: any, data: any) {
    this.crudService
      .edit(id, data)
      .then(() => {
        this.nzDrawerRef.close();
      })
      .catch((error: any) => {});
      this.nzMessageService.success('แก้ไขสำเร็จ');
  }

  // -----------------------------------cancel botton------------------------
  cancel(){
    this.nzDrawerRef.close();
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
    if(!open){
      this.calculateDiff()
    }
    
    console.log('handleEndOpenChange', open);
  }


  // calculate date differents ----------------------------------------------------------------
  
  calculateDiff(){

    let date1 = this.dataEditSend.date_start;
    let date2 = this.dataEditSend.date_end;
    let dayCount = 0
    console.log(date1)
    console.log(date2)

    while (date2 >= date1) {
      dayCount++
      date1.setDate(date1.getDate() + 1)
    }
    date1.setDate(date1.getDate() - dayCount)
    this.dataEditSend.allday = dayCount 
    return this.dataEditSend.allday
    
}

}
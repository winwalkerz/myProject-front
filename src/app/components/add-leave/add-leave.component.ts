import { NzDrawerRef } from 'ng-zorro-antd/drawer';
import { CrudService } from './../../crud.service';
import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzUploadFile } from 'ng-zorro-antd/upload';
import { Observable, Observer } from 'rxjs';
import { environment } from 'src/environments/environment';
import {NzDatePickerComponent} from 'ng-zorro-antd/date-picker';
import jwt_decode from 'jwt-decode';
import { NzModalService } from 'ng-zorro-antd/modal';




@Component({
  selector: 'app-add-leave',
  templateUrl: './add-leave.component.html',
  styleUrls: ['./add-leave.component.css'],
})
export class AddLeaveComponent implements OnInit {
  // @Input() data: any; //ตัวแปลสำหรับรับข้อมูลจาก mockupAPI

  isVisible = false;

  constructor(
    private Crudservice: CrudService,
    private nzDrawerRef: NzDrawerRef,
    private msg: NzMessageService,
    private modal: NzModalService
  ) {}

  environment = environment

  dataTypeSend:any  //รับมาจากหน้า main เพื่อนเอาไปแสดงค่า
  visible = false;
  date_str1 = '';
  date_str2 = '';
  leaveCreate = {
    id: '',
    // created_at:new Date(),
    id_status_fk: 1,
    type: '',
    id_user_fk: null,
    date_start: new Date(),
    date_end: new Date(),
    description: '',
    file: '',
    allday: 0
  };
  loading = false;
  avatarUrl?: string;


  // calculate date differents ----------------------------------------------------------------
  calculateDiff(){

    let date1 = this.leaveCreate.date_start;
    let date2 = this.leaveCreate.date_end;
    let dayCount = 0

    while (date2 >= date1) {
      dayCount++
      date1.setDate(date1.getDate() + 1)
    }
    date1.setDate(date1.getDate() - dayCount)
    this.leaveCreate.allday = dayCount 
    return this.leaveCreate.allday
    
}

// varible of date_start_end --------------------------------------------
  open(): void {
    this.visible = true;
  }

  close(): void {
    this.visible = false;
  }



// start ----------------------------------------------------------------------------------
  decode: any;
  ngOnInit(): void {
    var token = localStorage.getItem('token'); //สร้างตัวแปลมาเก็บ token ที่มาจาก storage
    this.decode = jwt_decode(token || '');
    this.leaveCreate.id_user_fk = this.decode.id;
    console.log(this.leaveCreate.id)
  }


// --------------------------------confiamation add leave--------------------------------------
  showConfirm(data: any){
    this.isVisible = true;
    
  }
  
  handleOk(data:any): void {
    console.log('Button ok clicked!');
    this.Crudservice.createLeave(data).then(() => {
      this.isVisible = false;
      this.nzDrawerRef.close();
      this.leaveworkCreated(data);
  });
     
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
    this.nzDrawerRef.close();
  }

  
  leaveworkCreated(data:any): void {
    this.modal.success({
      nzTitle: 'แจ้งเตือน',
      nzContent: 'คุณได้ทำการลาเป็นจำนวน '+ this.leaveCreate.allday + ' วัน',
      nzOkText: 'OK',
      nzOkType: 'primary',
      nzCancelText: null,
      nzOkDanger: true,
      nzFooter: null,
      nzOnOk: () => console.log('OK'),
    });
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
    console.log(this.leaveCreate.date_start);
  }

  handleEndOpenChange(open: boolean): void {
    if(!open){
      this.calculateDiff()
    }
    console.log(this.leaveCreate.allday)
    console.log('handleEndOpenChange', open);
  }




  // upload ------------------------------------------------

  beforeUpload = (file: NzUploadFile, _fileList: NzUploadFile[]) => {
    return new Observable((observer: Observer<boolean>) => {
      const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
      if (!isJpgOrPng) {
        this.msg.error('You can only upload JPG file!');
        observer.complete();
        return;
      }
      const isLt2M = file.size! / 1024 / 1024 < 2;
      if (!isLt2M) {
        this.msg.error('Image must smaller than 2MB!');
        observer.complete();
        return;
      }
      observer.next(isJpgOrPng && isLt2M);
      observer.complete();
    });
  };

  private getBase64(img: File, callback: (img: string) => void): void {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result!.toString()));
    reader.readAsDataURL(img);
  }

  handleChange(info: { file: NzUploadFile }): void {
    switch (info.file.status) {
      case 'uploading':
        this.loading = true;
        break;
      case 'done':
        this.leaveCreate.file = info.file.response.patch
        // Get this url from response in real world.
        this.getBase64(info.file!.originFileObj!, (img: string) => {
          this.loading = false;
          this.avatarUrl = img;
        });
        break;
      case 'error':
        this.msg.error('Network error');
        this.loading = false;
        break;
    }
  }


}
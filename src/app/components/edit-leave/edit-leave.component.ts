import { NzDrawerRef } from 'ng-zorro-antd/drawer';
import { CrudService } from './../../crud.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NzDatePickerComponent } from 'ng-zorro-antd/date-picker';
import { NzMessageService} from 'ng-zorro-antd/message';
import jwt_decode from 'jwt-decode'
import differenceInCalendarDays from 'date-fns/differenceInCalendarDays'
import * as moment from 'moment'
import { HolidayService } from 'src/app/holiday.service';
import { environment } from 'src/environments/environment';
import { NzUploadFile } from 'ng-zorro-antd/upload'
import { Observable, Observer } from 'rxjs'
@Component({
  selector: 'app-edit-leave',
  templateUrl: './edit-leave.component.html',
  styleUrls: ['./edit-leave.component.css'],
})
export class EditLeaveComponent implements OnInit {
  
  dataEditSend: any;
  allday = 0
  decode: any
  isVisible = false

  environment = environment
  loading = false
  avatarUrl?: string

  
 
  constructor(
    private crudService: CrudService,
    private nzDrawerRef: NzDrawerRef,
    private nzMessageService: NzMessageService,
    private holyService: HolidayService
  ) {}

  ngOnInit(): void {
    var token = localStorage.getItem('token') //สร้างตัวแปลมาเก็บ token ที่มาจาก storage
    this.decode = jwt_decode(token || '')
    this.dataEditSend.id_user_fk = this.decode.id
    this.dataEditSend.sex = this.decode.sex
    // this.date = this.dataEditSend.date_start
    console.log(this.dataEditSend)
    console.log('this is ', this.date)
  }

  //ฟังก์ชัน calendar
  date = null

  onChange (result: Date[]): void {
    this.dataEditSend.date_start = result[0]
    this.dataEditSend.date_end = result[1]
    console.log('oateStart: ', this.dataEditSend.date_start)
    console.log('oateEnd: ', this.dataEditSend.date_end)
  }
  // block ลาย้อนหลัง
  today = new Date()
  disabledDate = (current: Date): boolean => {
    return differenceInCalendarDays(current, this.today) < 0
  }


  showConfirmEdit (id:any, data: any): void {
    this.dataEditSend.allday = this.calculateBusinessDays(
      this.dataEditSend.date_start,
      this.dataEditSend.date_end
    )
    this.isVisible = true
    console.log('this is ', this.date)
  }

  handleOk (data: any): void {
    console.log('Button ok clicked!')
    this.crudService.edit(data.id, data)
      .then(() => {
        this.isVisible = false
        this.nzDrawerRef.close()
        this.nzMessageService.success('แก้ไขคำขอลางานสำเร็จ')
        // this.leaveworkCreated(data)
      })
      .catch(err => {
        this.nzMessageService.error(err.error.message)
      })
  }

  handleCancel (): void {
    console.log('Button cancel clicked!')
    this.isVisible = false
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

   // -------------------------------------------------------------calculate day of leave --------------------------------------------------------------

   calculateBusinessDays (firstDate: any, secondDate: any) {
    // EDIT : use of startOf
    let day1 = moment(moment(firstDate).format('YYYY-MM-DD')).startOf('day')
    let day2 = moment(moment(secondDate).format('YYYY-MM-DD')).startOf('day')
    // console.log("THIS IS StartOf: ",day1)
    // console.log("THIS IS StartOf: ",day2)
    // EDIT : start at 1
    let adjust = 1

    if (day1.dayOfYear() === day2.dayOfYear() && day1.year() === day2.year()) {
      if (day1.day() === 6 || day1.day() === 0) {
        return 0
      }
      return 1
    }

    if (day2.isBefore(day1)) {
      const temp = day1
      day1 = day2
      day2 = temp
    }

    //Check if first date starts on weekends
    if (day1.day() === 6) {
      //Saturday
      //Move date to next week monday
      day1.day(8)
    } else if (day1.day() === 0) {
      //Sunday
      //Move date to current week monday
      day1.day(1)
    }

    //Check if second date starts on weekends
    if (day2.day() === 6) {
      //Saturday
      //Move date to current week friday
      day2.day(5)
    } else if (day2.day() === 0) {
      //Sunday
      //Move date to previous week friday
      day2.day(-2)
    }

    const day1Week = day1.week()
    let day2Week = day2.week()

    //Check if two dates are in different week of the year
    if (day1Week !== day2Week) {
      //Check if second date's year is different from first date's year
      if (day2Week < day1Week) {
        day2Week += day1Week
      }
      //Calculate adjust value to be substracted from difference between two dates
      // EDIT: add rather than assign (+= rather than
      adjust += -2 * (day2Week - day1Week)
    }
    let total = day2.diff(day1, 'days') + adjust
    if (total < 0) {
      total = 0
    }
    //ฟังก์ชันเทียบวันหยุด เพื่อลบจำนวนวันหยุด
    let allinHoliday: any = []
    allinHoliday = this.calculateVacation(this.holyData, this.countHoliday)
    console.log('this is Holiday : ', allinHoliday)
    //ay1s, day2s เปลี่ยนtype เป็น number
    let day1s = day1.dayOfYear()
    let day2s = day2.dayOfYear()
    console.log(day1s, day2s)
    let counts = 0
    for (let item = day1s; item <= day2s; item++) {
      for (let value = 0; value <= this.countHoliday; value++) {
        if (item === allinHoliday[value]) {
          counts += 1
        }
      }
    }
    console.log('count: ', counts)
    return total - counts
  }

  holyData: any
  countHoliday: any
  getHoliday () {
    this.holyService.getHoliday().then((res: any) => {
      this.holyData = res.data
      this.countHoliday = res.count
      this.calculateVacation(this.holyData, this.countHoliday)
    })
  }

  calculateVacation (data: any, count: any) {
    const dataVacation: any = []
    const dataVacation2: any = []
    for (let item = 0; item < count; item++) {
      dataVacation[item] = moment(moment(data[item].date).format('YYYY-MM-DD')).startOf('day');
      console.log(dataVacation[item].day())
      //check วันหยุดตรงกับเสาร์อาทิตย์หรือไม่
      if (dataVacation[item].day() != 0 && dataVacation[item].day() != 6) {
        dataVacation2[item] = dataVacation[item].dayOfYear()
        // console.log(dataVacation2[item]);
      }
    }
    return [...new Set(dataVacation2)]
  }

  //block holiday

  // upload ------------------------------------------------

  beforeUpload = (file: NzUploadFile, _fileList: NzUploadFile[]) => {
    return new Observable((observer: Observer<boolean>) => {
      const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png'
      if (!isJpgOrPng) {
        this.nzMessageService.error('You can only upload JPG file!')
        observer.complete()
        return
      }
      const isLt2M = file.size! / 1024 / 1024 < 2
      if (!isLt2M) {
        this.nzMessageService.error('Image must smaller than 2MB!')
        observer.complete()
        return
      }
      observer.next(isJpgOrPng && isLt2M)
      observer.complete()
    })
  }

  private getBase64 (img: File, callback: (img: string) => void): void {
    const reader = new FileReader()
    reader.addEventListener('load', () => callback(reader.result!.toString()))
    reader.readAsDataURL(img)
  }

  handleChange (info: { file: NzUploadFile }): void {
    switch (info.file.status) {
      case 'uploading':
        this.loading = true
        break
      case 'done':
        this.dataEditSend.file = info.file.response.patch
        // Get this url from response in real world.
        this.getBase64(info.file!.originFileObj!, (img: string) => {
          this.loading = false
          this.avatarUrl = img
        })
        break
      case 'error':
        this.nzMessageService.error('Network error')
        this.loading = false
        break
    }
  }
}
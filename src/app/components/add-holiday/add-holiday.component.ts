import { NzMessageService } from 'ng-zorro-antd/message'
import { NzModalRef } from 'ng-zorro-antd/modal'
import { HolidayService } from './../../holiday.service'
import { Component, OnInit, Input } from '@angular/core'

@Component({
  selector: 'app-add-holiday',
  templateUrl: './add-holiday.component.html',
  styleUrls: ['./add-holiday.component.css']
})
export class AddHolidayComponent implements OnInit {
  alert = ''
  // @Input() date: any
  date = null
  valueHoliday = {
    id: '',
    content: '',
    type: '',
    date: ''
  }

  // @Input() subtitle?: string;
  constructor (
    private holy: HolidayService,
    private nzModalRef: NzModalRef,
    private NzMessageService: NzMessageService
  ) {}

  ngOnInit (): void {}
  isVisible = false
  isOkLoading = false

  onChange (result: Date): void {
    console.log('onChange: ', result)
  }

  createHolidayy (data: any) {
    this.holy
      .createHoliday(data)
      .then((res: any) => {
        this.nzModalRef.close()
        this.NzMessageService.success('เพิ่มวันหยุดสำเร็จ')
      })
      .catch(err => {
        this.NzMessageService.error(err.error.message)
        console.log(this.alert)
      })
  }

  // -----------------------------------cancel botton------------------------
  cancel () {
    this.nzModalRef.close()
  }
}

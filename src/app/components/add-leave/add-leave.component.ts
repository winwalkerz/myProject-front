import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-add-leave',
  templateUrl: './add-leave.component.html',
  styleUrls: ['./add-leave.component.css'],
})
export class AddLeaveComponent implements OnInit {
  // @Input() data: any; //ตัวแปลสำหรับรับข้อมูลจาก mockupAPI
  visible = false;
  valueCreate = {
    first_name: '',
    last_name:''
  };
  open(): void {
    this.visible = true;
  }

  close(): void {
    this.visible = false;
  }

  constructor() {}

  ngOnInit(): void {}
}

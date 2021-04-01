import { CrudService } from './../../crud.service';
import { NzDrawerRef } from 'ng-zorro-antd/drawer';
import { Component, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';


@Component({
  selector: 'app-add-users',
  templateUrl: './add-users.component.html',
  styleUrls: ['./add-users.component.css']
})
export class AddUsersComponent implements OnInit {
  isVisible = false;
  visible = false;
  passwordVisible = false;
  
  
  alert: any = [];
 
  addUser = {
    // id: '',
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    role: 'user',
    position: '',
    max_days: '',
    checkpassword: '',
    sex:''
  };
  constructor(private Crudservice : CrudService,
    private NzDrawerRef: NzDrawerRef,
    private nzMessageService: NzMessageService,
    private msg: NzMessageService,) { }

  ngOnInit(): void {
  }
 
  createUser(data: any) {
    this.Crudservice.createUsers(data).then(() => {
      this.NzDrawerRef.close();
      this.nzMessageService.success('เพิ่มยูสเซอร์สำเร็จ!');
      console.log('add success')
      
    }).catch((err) => {
      this.msg.error(err.error.message);
      console.log(this.alert);
    });
  }

  open(): void {
    this.visible = true;
  }

  close(): void {
    this.visible = false;
  }

   // -----------------------------------cancel botton------------------------
   cancel(){
    this.NzDrawerRef.close();
  }

  
}
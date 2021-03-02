import { CrudService } from './../../crud.service';
import { NzDrawerRef } from 'ng-zorro-antd/drawer';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-users',
  templateUrl: './add-users.component.html',
  styleUrls: ['./add-users.component.css']
})
export class AddUsersComponent implements OnInit {
  isVisible = false;
  visible = false;
  addUser = {
    // id: '',
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    role: 'user',
    position: '',
    max_days:0
  };
  constructor(private Crudservice : CrudService,
    private NzDrawerRef: NzDrawerRef) { }

  ngOnInit(): void {
  }
  createUser(data: any) {
    this.Crudservice.createUsers(data).then(() => {
      console.log('add success')
      this.showModal();
    });
  }

  open(): void {
    this.visible = true;
  }

  close(): void {
    this.visible = false;
  }

  showModal(): void {
    this.isVisible = true;
  }


  // modal

  handleOk(): void {
    console.log('Button ok clicked!');
    this.isVisible = false;
    this.NzDrawerRef.close();
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
    this.NzDrawerRef.close();
  }
}
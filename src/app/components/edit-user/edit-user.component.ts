import { UserService } from './../../user.service';
import { NzDrawerRef } from 'ng-zorro-antd/drawer';
import { Component, OnInit } from '@angular/core';
import { NzMessageService} from 'ng-zorro-antd/message';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css'],
})
export class EditUserComponent implements OnInit {
  edit: any;
  constructor(
    private userService: UserService,
    private nzDrawerRef: NzDrawerRef,
    private nzMessageService: NzMessageService
  ) {}

  ngOnInit(): void {}
  editfunc(id: any, data: any) {
    this.userService
      .editUser(id, data)
      .then(() => {
        this.nzDrawerRef.close();
        this.nzMessageService.success('Edit Success.');
      })
      .catch((error: any) => {});
  }
}
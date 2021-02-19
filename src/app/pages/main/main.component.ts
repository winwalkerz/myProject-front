import { UserService } from './../../user.service';
import { EditLeaveComponent } from './../../components/edit-leave/edit-leave.component';
import { AddLeaveComponent } from './../../components/add-leave/add-leave.component';
import { CrudService } from './../../crud.service';
import { Component, OnInit } from '@angular/core';
import { NzDrawerService, NzDrawerRef } from 'ng-zorro-antd/drawer'; //import service ของ ant
import { Router } from '@angular/router';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  isCollapsed = false;
  data: any;
  dataForEdit: any;
  typeData: any=[];
  list_data: any;
 
  // datas = {
  //   id: '',
  //   first_name: '',
  //   last_name: '',
  //   date_start: '',
  //   date_end:'',
  //   // id_leave: '',
  //   type: '',
  //   // status_name: '',
  // };
  value = 'tar';
  listorder: any = [];
  user_info: any = [];
  
  constructor(
    private crud: CrudService,
    private nzDrawerService: NzDrawerService, //ประกาศตัวแปลเพื่อมาใช้งาน
    private userService: UserService,
    private router: Router
  ) {}

  
  ngOnInit(): void {
    this.showData();
    this.showInfo();
    console.log('ดูนะไอสัส')
    console.log(this.dataForEdit)
    // this.addLeave();
  }
  

  reData(value: any) {
    this.dataForEdit = { ...value };
    
    this.onClickEdit();
  }
  addLeave() {
    const drawRef = this.nzDrawerService.create<
      AddLeaveComponent,
      { dataTypeSend: any }
    >({
      nzTitle: 'เพิ่มรายการลางาน',
      nzContent: AddLeaveComponent,
      nzWidth: '65%',
      nzContentParams: {
        dataTypeSend: this.typeData,
      },
    });

    drawRef.afterClose.subscribe(() => {
      this.showData();
    });
  }
  onClickEdit() {
    const drawRef = this.nzDrawerService.create<
      EditLeaveComponent,
      { dataEditSend: any }
    >({
      nzTitle: 'แก้ไขรายการลางาน',
      nzContent: EditLeaveComponent,
      nzWidth: '65%',
      nzContentParams: {
        dataEditSend: this.dataForEdit,
      },
    });
    drawRef.afterClose.subscribe(() => {
      this.showData();
    });
  }
  search() {
    this.crud.show(this.value).then((res: any) => {
      this.data = res;
    });
  }

  showData() {
    this.userService.getOrderByID().then((res: any) => {
      this.listorder = res;
    });
  }
  

  showInfo() {
    this.userService.getAlluser().then((res: any) => {
      this.user_info = res;
    });
  }

  logout() {
    this.router.navigate(['login']);
  }

  // deleteLeave(){
  //   this.crud.delete
  // }

  // pmam() {
  //   var str = this.listorder.create_at
  //   console.log(str)
  // }


}
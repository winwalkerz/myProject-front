import { UserService } from './../../user.service';
import { AddLeaveComponent } from './../../components/add-leave/add-leave.component';
import { CrudService } from './../../crud.service';
import { Component, OnInit } from '@angular/core';
import { NzDrawerService, NzDrawerRef } from 'ng-zorro-antd/drawer'; //import service ของ ant
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  isCollapsed = false;
  data: any;
  list_data = {
    id: '',
    first_name: '',
    last_name: '',
    date_time:'',
    id_leave:'',
    type_leave:''
  };
  value = 'tar';
  listorder: any = [];
  constructor(
    private crud: CrudService,
    private nzDrawerService: NzDrawerService, //ประกาศตัวแปลเพื่อมาใช้งาน
    private userService:UserService,
  ) {}

  addLeave() {
    const drawRef = this.nzDrawerService.create<AddLeaveComponent>({
      nzTitle: 'เพิ่มรายการลางาน',
      nzContent: AddLeaveComponent,
      nzWidth: '65%',
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
  ngOnInit(): void {
    this.showData()
  }
  
  showData() {
    this.userService.getOrderByID().then((res: any) => {
      this.listorder = res;
      console.warn(this.listorder);
    });
  }
}

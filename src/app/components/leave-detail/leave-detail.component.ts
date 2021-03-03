import { CrudService } from './../../crud.service';
import { StatusService } from '../../status.service';
import { Component, OnInit } from '@angular/core';
import { NzDrawerRef } from 'ng-zorro-antd/drawer';
import { NzMessageService} from 'ng-zorro-antd/message';

@Component({
  selector: 'app-leave-detail',
  templateUrl: './leave-detail.component.html',
  styleUrls: ['./leave-detail.component.css']
})
export class LeaveDetailComponent implements OnInit {

  constructor(
    private nzdrawerref: NzDrawerRef,
    private statusService: StatusService,
    private crud: CrudService,
    private nzMessageService: NzMessageService,
  ) { }

  dataDetailSendAfter: any = [];
  // data: any = [];
  statusData: any = [];

  ngOnInit(): void {
  }

  getStatus() {
    this.statusService.getStatus().then((res: any) => {
      this.statusData = res;
      console.log(this.statusData.data.check);
    });
  }

  // 
    edit(id: any, data: any) {
    // console.log(id, data);
    this.dataDetailSendAfter.check='1'
    this.crud
      .edit(id, data)
      .then( () => {
        this.nzdrawerref.close();
        // location.reload() 
        this.nzMessageService.success('Edit Success.');
      }).then(() => {
        
      
      })
      .catch((error: any) => {});
      
  }

  closeEdit(){
    this.nzdrawerref.close();
  }
}

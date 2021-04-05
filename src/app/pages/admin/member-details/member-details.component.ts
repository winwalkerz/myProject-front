import { CrudService } from './../../../crud.service';
import { UserService } from './../../../user.service'
import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-member-details',
  templateUrl: './member-details.component.html',
  styleUrls: ['./member-details.component.css']
})
export class MemberDetailsComponent implements OnInit {
  memberDetail: any = null
  data: any = null
  leaveDetail: any = null
  listorder: any = []
  model_search={
    page: 1,
    search: '',
  }
  count: any
  allcount = 0
  lastallcount = 0
  decode: any
  

  constructor (
    private activatedRoute: ActivatedRoute,
    private user: UserService,
    private crud: CrudService
  ) {}

  async ngOnInit () {
    let id = this.activatedRoute.snapshot.paramMap.get('id')
    console.log('id : ', id);
   
    try {
      let res = await this.user.getUserByID(id || '{}')
      this.memberDetail = res;
      this.data = this.memberDetail.data;
      console.log(this.memberDetail);
      console.log(this.data[0].id);
    } catch (err) {}
    try {
      let res = await this.crud.getLeaveByID(id || '{}')
      this.leaveDetail = res;
      console.log(this.leaveDetail);
    } catch (err) {} 
    this.showData(id,this.model_search)
    console.log(this.listorder)
    
  }

 //แสดข้อมูลของ user
 showData (id:any,data:any) {
  this.crud.getLeaveAllByID(id,data).then((res: any) => {
    this.listorder = res.data
    this.count = res.count

    // this.calculated(this.count)
    // this.decode = this.listorder[0].max_days
  })
}

showAllLeave(){

}

// calculated (item: any) {
//   this.allcount = 0
//   for (let i = 0; i < item; i++) {
//     this.allcount += this.listorder[i].allday
   
//   }
//   this.lastallcount = this.decode.max_days - this.allcount
  
// }

  click($event: any) {
    this.model_search.page = $event;
    this.showData(this.data[0].id, this.model_search);
  }

}
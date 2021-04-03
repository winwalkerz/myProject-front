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
  }

}

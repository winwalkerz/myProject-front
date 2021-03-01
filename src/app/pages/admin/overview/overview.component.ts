import { UserService } from './../../../user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css'],
})
export class OverviewComponent implements OnInit {
  model_search = {
    page: 1,
    search: '',
  };
  allCheck = {
    check: '',
  };
  unCheck = {
    check: '0',
  };
  check = { 
    check: '1' 
  };
  countsMem: any;
  countsLeave: any;
  countUnCheck: any;
  countCheck: any;
  constructor(private users: UserService) {}

  ngOnInit(): void {
    this.countMember();
    this.getList();
    this.getList1();
    this.getList2();
  }
  countMember() {
    this.users.memberList(this.model_search).then((res: any) => {
      this.countsMem = res.count;
      // console.log('THIS IS MEMBER COUNT: ', this.countsMem);
    });
  }
  getList() {
    this.users.getAlluser(this.allCheck).then((res: any) => {
      this.countsLeave = res.count;
      console.log(this.countsLeave);
      // this.calculated(this.countsLeave);
    });
  }
  getList1() {
    this.users.getAlluser(this.unCheck).then((res: any) => {
      this.countUnCheck = res.count;
      console.log(this.countUnCheck);
      // this.calculated(this.countsLeave);
    });
  }
  getList2() {
    this.users.getAlluser(this.check).then((res: any) => {
      this.countCheck = res.count;
      console.log(this.countCheck);
      // this.calculated(this.countsLeave);
    });
  }
}

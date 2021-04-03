import { UserService } from './../../../user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-member-details',
  templateUrl: './member-details.component.html',
  styleUrls: ['./member-details.component.css']
})
export class MemberDetailsComponent implements OnInit {

  constructor(
    private user: UserService
  ) { }

  ngOnInit(): void {
  }

  getdatabyID(id:any){
    this.user.getUserByID(id)
  }
}

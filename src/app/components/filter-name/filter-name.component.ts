import { CrudService } from './../../crud.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter-name',
  templateUrl: './filter-name.component.html',
  styleUrls: ['./filter-name.component.css'],
})
export class FilterNameComponent implements OnInit {
  searchText: string = '';
  constructor(private crud: CrudService) {}
  model_search = {
    fist_name: '',
    last_name: '',
  };
  listAlluser: any = [];
  count: any;
  ngOnInit(): void {}
  changeFilter() {
    this.crud.filter(this.model_search).then((res: any) => {
      this.listAlluser = res.data;
      this.count = res.count;
      console.log(this.listAlluser)
    });
  }
}
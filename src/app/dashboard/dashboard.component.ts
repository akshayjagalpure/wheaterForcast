import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  searchName = '';
  searchdata: any;

  constructor() {}

  globalSearch(data) {
    this.searchdata = { search: this.searchName };
  }

  ClearSearchData() {
    this.searchName = '';
  }

  ngOnInit(): void {}
}

import { Component, OnInit } from '@angular/core';
import { SalesPerson } from './sales-person';

@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list.component.html',
  styleUrls: ['./sales-person-list.component.css'],
})
export class SalesPersonListComponent implements OnInit {

  // create an array of objects
  salesPersonList: SalesPerson[] = [
    new SalesPerson("chipo", "napo", "chipo@gmail.com", 50000),
    new SalesPerson("john", "doe", "john@gmail.com", 40000),
    new SalesPerson("claire", "murphy", "claire@gmail.com", 90000),
    new SalesPerson("mai", "troung", "mai@gmail.com", 10000)
  ];

  constructor() {}

  ngOnInit(): void {}

}
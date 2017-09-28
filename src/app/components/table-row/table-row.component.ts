import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-table-row',
  templateUrl: './table-row.component.html',
  styleUrls: ['./table-row.component.css']
})
export class TableRowComponent implements OnInit {
  @Input() schedules;
  row: any[];
  // num = new Array(96).map(0);

  constructor() { }

  ngOnInit() {
  }

}

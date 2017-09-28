import {Component, Injectable, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-table-cell',
  templateUrl: './table-cell.component.html',
  styleUrls: ['./table-cell.component.css']
})

export class TableCellComponent implements OnInit {
  @Input() timeBlock;

  constructor() { }

  ngOnInit() {
  }

}

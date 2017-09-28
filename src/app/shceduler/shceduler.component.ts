import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-shceduler',
  templateUrl: './shceduler.component.html',
  styleUrls: ['./shceduler.component.css']
})
export class ShcedulerComponent implements OnInit {

  myData: any;

  @Input() userSchdules;

  constructor() { }

  ngOnInit() {
    this.myData = [
      {
        userName: 'Tal Levi',
        userSchdules: [
          {
            startTime: new Date(),
            endTime: new Date(),
            name: 'Clear Tashlat'
          },
          {
            startTime: new Date(),
            endTime: new Date(),
            name: 'Clear Tashlat'
          },
          {
            startTime: new Date(),
            endTime: new Date(),
            name: 'Clear Tashlat'
          },
          {
            startTime: new Date(),
            endTime: new Date(),
            name: 'Clear Tashlat'
          }
        ]
      }
    ]
  }

}

import {Component, Input, OnInit} from '@angular/core';
import { DataStorageService} from '../shared/data-storage.service';
import { Schedule } from '../classes/shcedule-model';

@Component({
  selector: 'app-shceduler',
  templateUrl: './shceduler.component.html',
  styleUrls: ['./shceduler.component.css']
})
export class ShcedulerComponent implements OnInit {

  // myData: any;
  schedules: Schedule[];

  @Input() userSchdules;

  constructor(private dataStorageService: DataStorageService) { }

  ngOnInit() {
    this.dataStorageService.getSchedules().subscribe((schedules => {
      this.schedules = schedules;
    }));
    /*[
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
    ];*/
  }

}

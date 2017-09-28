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
  // users:

  @Input() userSchdules;

  constructor(private dataStorageService: DataStorageService) { }

  ngOnInit() {
    this.dataStorageService.getSchedules().subscribe((schedules => {
      this.schedules = schedules;
    }));

    this.dataStorageService.getUsers().subscribe((schedules => {
      this.schedules = schedules;
    }));
  }

}

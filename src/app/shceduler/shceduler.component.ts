import {Component, Input, OnInit} from '@angular/core';
import { DataStorageService} from '../shared/data-storage.service';
import { Schedule } from '../classes/shcedule-model';
import {User} from "../classes/user-model";

@Component({
  selector: 'app-shceduler',
  templateUrl: './shceduler.component.html',
  styleUrls: ['./shceduler.component.css']
})
export class ShcedulerComponent implements OnInit {

  // myData: any;
  schedules: Schedule[];
  users: User[];

  @Input() userSchedules;

  constructor(private dataStorageService: DataStorageService) { }

  ngOnInit() {
    this.dataStorageService.getSchedules().subscribe((schedules => {
      this.schedules = schedules;
    }));

    this.dataStorageService.getUsers().subscribe((users => {
      this.users = users;
    }));
  }

}

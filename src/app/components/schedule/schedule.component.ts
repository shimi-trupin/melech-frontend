import { Component, OnInit } from '@angular/core';
import {DataService} from '../../services/data.service';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {
  users: User[];
  schedules: Schedule[];
  constructor(private dataService: DataService) { }

  ngOnInit() {
    console.log('ngOnInit ran...');
    this.dataService.getUsers().subscribe((users) => {
      this.users = users;
    });
    /*this.dataService.getUsers().subscribe((schedules) => {
      this.schedules = schedules; // todo: get list of schedules per person from server
    });*/
  }

}

interface User {
  _id: number;
  className: string;
  name: string;
  mail: string;
  birth_date: string;
  address: string;
  status: string;
  user_type: string;
  squadron: string;
  phone_num: number;
  cell_num: number;
  work_num: number;
  course_num: number;
  hazah_job: string;
}

interface Schedule {
  qualification_name: string;
  qualification_start_time: string;
  qualification_end_time: string;
  quadron_relevance: string;
}

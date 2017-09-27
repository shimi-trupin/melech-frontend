import { Component, OnInit } from '@angular/core';
import {DataService} from '../../services/data.service';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {
  users: User[];
  constructor(private dataService: DataService) { }

  ngOnInit() {
    console.log('ngOnInit ran...');
    this.dataService.getUsers().subscribe((users) => {
      this.users = users;
    });
  }

}

interface User {
  name: string;
  id: number;
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

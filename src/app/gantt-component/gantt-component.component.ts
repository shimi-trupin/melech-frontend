import {Component, ViewChild, AfterViewInit, OnInit} from '@angular/core';
import {DayPilot, DayPilotGanttComponent} from 'daypilot-pro-angular';
import {DataStorageService} from "../shared/data-storage.service";
import {Schedule} from "../classes/shcedule-model";
import {User} from "../classes/user-model";
import {forEach} from "@angular/router/src/utils/collection";

@Component({
  selector: 'app-gantt-component',
  template: `
    <daypilot-scheduler [config]='config' [events]='events' #scheduler></daypilot-scheduler>`
})
export class GanttComponent implements OnInit {
  @ViewChild('gantt')
  gantt: DayPilotGanttComponent;
  schedules: Schedule[];
  users: User[];

  config: any = {
    timeHeaders : [
      {groupBy: 'Month', format: 'MMMM yyyy'},
      {groupBy: 'Day', format: 'd'}
    ],
    eventHeight: 40,
    scale: 'Day',
    days: 24,
    startDate: '2017-05-01',
    resources: []
/*{ name: 'Tal Levi', id: 'R1'},
{ name: 'Uriel Rabii', id: 'R2'}*/
  };

  events = [
    {
      id: '1',
      resource: 'R1',
      start: '2017-05-03',
      end: '2017-05-15',
      text: 'Event 1',
    }
  ];


  constructor(private dataStorageService: DataStorageService) {  }

  ngOnInit(): void {
    // this.schedService.getUsers().subscribe(users => {
    // this.config.resources = users;
    // })
    this.dataStorageService.getSchedules().subscribe((schedules => {
      this.schedules = schedules;

      console.log(this.schedules);
      let newEvents = [];

      for (let i in this.schedules) {
        newEvents.push({
          'id': i,
          'resource': this.schedules[i]['username'],
          'start': this.schedules[i]['startTime'],
          'end': this.schedules[i]['endTime'],
          'text': this.schedules[i]['schedule_name']
        });
      }
      console.log(newEvents);
      this.events = newEvents;
    }));

    this.dataStorageService.getUsers().subscribe((users => {
      this.users = users;

      console.log(this.users);
      let newResources = [];

      for (let i in this.users) {
        newResources.push({
          'name': this.users[i]['name'],
          'id': this.users[i]['name']
        });
      }

      this.config.resources = newResources;
    }));
  }
}

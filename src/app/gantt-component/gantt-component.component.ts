import {Component, ViewChild, AfterViewInit, OnInit} from '@angular/core';
import {DayPilot, DayPilotGanttComponent} from 'daypilot-pro-angular';

@Component({
  selector: 'app-gantt-component',
  template: `
    <daypilot-scheduler [config]='config' [events]='events' #scheduler></daypilot-scheduler>`
})
export class GanttComponent implements OnInit {
  @ViewChild('gantt')
  gantt: DayPilotGanttComponent;

  config: any = {
    timeHeaders : [
      {groupBy: 'Month', format: 'MMMM yyyy'},
      {groupBy: 'Day', format: 'd'}
    ],
    eventHeight: 40,
    scale: 'Day',
    days: 24,
    startDate: '2017-05-01',
    resources: [
      { name: 'Tal Levi', id: 'R1'},
      { name: 'Uriel Rabii', id: 'R2'}
    ]
  }

  events = [
    {
      id: '1',
      resource: 'R1',
      start: '2017-05-03',
      end: '2017-05-15',
      text: 'Event 1',
    }
  ];
  ngOnInit(): void {
    // this.schedService.getUsers().subscribe(users => {
    // this.config.resources = users;
    // })
  }

}

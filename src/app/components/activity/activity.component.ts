import { Component, OnInit } from '@angular/core';
import {Activity} from '../../classes/activity';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css']
})
export class ActivityComponent implements OnInit {

  types = ['תקן', 'מבצעית', 'קרקעית', 'מחוץ ליחידה'];
  model = new Activity('name', 'types', 18, 19.5);
  submitted = false;

  constructor() { }

  ngOnInit() {
  }

  onSubmit() { this.submitted = true; }

  // TODO: remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }

}

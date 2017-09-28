import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {GanttComponent} from './gantt-component/gantt-component.component';
import {DayPilotModule} from 'daypilot-pro-angular';

@NgModule({
  imports:      [
    BrowserModule,
    FormsModule,
    HttpModule,
    DayPilotModule
  ],
  declarations: [
    GanttComponent
  ],
  exports:      [ GanttComponent ],
  providers:    [ ]
})
export class GanttModule { }

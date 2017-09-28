import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import { AppComponent } from './app.component';
import { ScheduleComponent } from './components/schedule/schedule.component';

import {DataService} from './services/data.service';
import { TableCellComponent } from './components/table-cell/table-cell.component';
import { TableRowComponent } from './components/table-row/table-row.component';
import { QualificationsComponent } from './components/qualifications/qualifications.component';
import { ActivityComponent } from './components/activity/activity.component';

@NgModule({
  declarations: [
    AppComponent,
    ScheduleComponent,
    TableCellComponent,
    TableRowComponent,
    QualificationsComponent,
    ActivityComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }

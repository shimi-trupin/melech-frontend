import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';

import { AppComponent } from './app.component';
import { ScheduleComponent } from './components/schedule/schedule.component';

import {DataService} from './services/data.service';
import { TableCellComponent } from './components/table-cell/table-cell.component';
import { TableRowComponent } from './components/table-row/table-row.component';

@NgModule({
  declarations: [
    AppComponent,
    ScheduleComponent,
    TableCellComponent,
    TableRowComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import {AppRoutingModule} from './app.routing.module';
import {ShcedulerComponent} from './shceduler/shceduler.component';
import {AddActivityComponent} from './add-activity/add-activity.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {GantChartComponent} from './gant-chart/gant-chart.component';
import {DataStorageService} from './shared/data-storage.service';

@NgModule({
  declarations: [
    AppComponent,
    ShcedulerComponent,
    AddActivityComponent,
    PageNotFoundComponent,
    GantChartComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [DataStorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }

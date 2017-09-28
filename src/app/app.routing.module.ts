import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ShcedulerComponent} from "./shceduler/shceduler.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {AddActivityComponent} from "./add-activity/add-activity.component";

const appRoutes: Routes = [
  { path: '', redirectTo: '/sched',  pathMatch: 'full' },
  { path: 'sched', component: ShcedulerComponent},
  { path: 'add', component: AddActivityComponent},
  { path: '**', component: PageNotFoundComponent }

];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {

}

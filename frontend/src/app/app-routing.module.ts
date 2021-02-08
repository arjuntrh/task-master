import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TaskListComponent } from './components/task-list/task-list.component';
import { AboutComponent } from './components/pages/about/about.component'

const routes: Routes = [
  {path: '', component: TaskListComponent},
  {path: 'about', component: AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

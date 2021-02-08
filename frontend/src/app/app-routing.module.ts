import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TaskListComponent } from './components/task-list/task-list.component';
import { AboutComponent } from './components/pages/about/about.component'
import { NewTaskComponent } from './components/pages/new-task/new-task.component';

const routes: Routes = [
  // {path: '', component: TaskListComponent},
  {path: '', redirectTo: '/tasks', pathMatch: 'full'},
  {path: 'tasks', component: TaskListComponent},
  {path: 'new', component: NewTaskComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

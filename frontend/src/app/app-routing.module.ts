import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TaskListComponent } from './components/task-list/task-list.component';
import { AboutComponent } from './components/pages/about/about.component'
import { NewTaskComponent } from './components/pages/new-task/new-task.component';
import { ViewTaskComponent } from './components/pages/view-task/view-task.component';
import { UpdateTaskComponent } from './components/pages/update-task/update-task.component';

const routes: Routes = [
  // {path: '', component: TaskListComponent},
  {path: '', redirectTo: '/tasks', pathMatch: 'full'},
  {path: 'tasks', component: TaskListComponent},
  {path: 'tasks/new', component: NewTaskComponent},
  {path: 'tasks/:id', component: ViewTaskComponent},
  {path: 'tasks/:id/update', component: UpdateTaskComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskListComponent } from './components/task-list/task-list.component';
import { TaskItemComponent } from './components/task-item/task-item.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { NewTaskComponent } from './components/pages/new-task/new-task.component';
import { ViewTaskComponent } from './components/pages/view-task/view-task.component';
import { UpdateTaskComponent } from './components/pages/update-task/update-task.component';
import { ScheduleTaskComponent } from './components/schedule-task/schedule-task.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskListComponent,
    TaskItemComponent,
    HeaderComponent,
    NewTaskComponent,
    ViewTaskComponent,
    UpdateTaskComponent,
    ScheduleTaskComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

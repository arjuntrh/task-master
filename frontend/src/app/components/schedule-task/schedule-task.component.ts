import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service'

@Component({
  selector: 'app-schedule-task',
  templateUrl: './schedule-task.component.html',
  styleUrls: ['./schedule-task.component.css']
})
export class ScheduleTaskComponent implements OnInit {
  celeryMessage:string = "";

  constructor(private myTaskService:TaskService) { }

  ngOnInit() {
    this.celeryMessage = "";
  }

  onSchedule() {
    this.myTaskService.scheduleTask().subscribe(msg => {
      this.celeryMessage = msg;
      console.log(msg);
    });
  }

}

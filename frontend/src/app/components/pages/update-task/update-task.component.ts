import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Router} from '@angular/router';
import { TaskService } from '../../../services/task.service'
import { Task } from '../../../models/Task';

@Component({
  selector: 'app-update-task',
  templateUrl: './update-task.component.html',
  styleUrls: ['./update-task.component.css']
})
export class UpdateTaskComponent implements OnInit {
  taskId: string;
  task: Task;
  isDataLoaded: boolean = false;

  constructor(private myActivatedRoute:ActivatedRoute, private myTaskService:TaskService, private myRouter: Router) { }

  ngOnInit() {
    this.taskId = this.myActivatedRoute.snapshot.paramMap.get("id");
    this.myTaskService.getTask(this.taskId).subscribe(task => {
      this.task = task;
      console.log("Here");
      console.log(task);
      this.isDataLoaded = true;
    });
  }

  onSubmit() {
    this.myTaskService.updateTask(this.task).subscribe(() => {
      this.myRouter.navigate(['/']);
    });
  }
}

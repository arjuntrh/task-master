import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service'
import { Task } from '../../models/Task';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  taskList: Task[];

  constructor(private myTaskService:TaskService) { }

  ngOnInit() {
    this.myTaskService.getTasks().subscribe(tasks => {
      this.taskList = tasks;
    });
  }

  deleteTask(task: Task) {
    this.myTaskService.deleteTask(task).subscribe(() => {
      this.taskList = this.taskList.filter(taskItem => taskItem !== task);
    });
  }

  addTask(task: Task) {
    this.myTaskService.addTask(task).subscribe(newTask => {
        this.taskList.push(newTask);
    });
  }
}

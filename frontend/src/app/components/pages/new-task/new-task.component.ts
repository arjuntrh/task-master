import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { TaskService } from '../../../services/task.service'
import { Task } from '../../../models/Task';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css']
})
export class NewTaskComponent implements OnInit {
  title: string;
  note: string;

  constructor(private myTaskService:TaskService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit() {
    // const task = {
    //   title: this.title,
    //   note: this.note,
    //   completed: false
    // }

    let task = new Task();
    task.title = this.title;
    task.note = this.note;
    task.completed = false;

    this.myTaskService.addTask(task).subscribe(() => {
      this.router.navigate(['/']);
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TaskService } from '../../../services/task.service'
import { Task } from '../../../models/Task';

@Component({
  selector: 'app-view-task',
  templateUrl: './view-task.component.html',
  styleUrls: ['./view-task.component.css']
})
export class ViewTaskComponent implements OnInit {

  taskId: string;
  task: Task;
  isDataLoaded: boolean = false;

  constructor(private myActivatedRoute:ActivatedRoute, private myTaskService:TaskService) { 
    this.taskId = this.myActivatedRoute.snapshot.paramMap.get("id");
    // this.myActivatedRoute.paramMap.subscribe(params => { 
    //   this.taskId = params.get('id'); 
    // });
    this.myTaskService.getTask(this.taskId).subscribe(task => {
      this.task = task;
      // console.log("Here");
      console.log(task);
      this.isDataLoaded = true;
    });
  }

  ngOnInit() {
  }

}

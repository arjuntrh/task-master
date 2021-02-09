import { Component, OnInit, Input, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';
import { Task } from '../../models/Task';
import { TaskService } from '../../services/task.service'
@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {
  @Input() task: Task;
  @Output() deletedTask: EventEmitter<Task> = new EventEmitter();
  @ViewChild('toggleSwitch', {static: false}) mySwitch;

  constructor(private myTaskService: TaskService) { }

  ngOnInit() {
    console.log(this.mySwitch);
  }

  // Set dynamic classes
  setClasses() {
    let classes = {
      'task-item': true,
      'is-complete': this.task.completed
    }

    return classes;
  }

  onToggle(task) {
    // toggle in UI
    task.completed = !task.completed;

    // toggle on server
    this.myTaskService.updateTask(task).subscribe(task => console.log(task))
  }

  onDelete(task) {
    this.deletedTask.emit(task);
  }
}

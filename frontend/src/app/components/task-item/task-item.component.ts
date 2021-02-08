import { Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
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

  constructor(private myTaskService:TaskService) { }

  ngOnInit() {
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
    this.myTaskService.toggleCompleted(task).subscribe(task => console.log(task))
  }

  onDelete(task) {
    this.deletedTask.emit(task);
  }
}

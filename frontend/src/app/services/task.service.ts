import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from '../models/Task';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})

export class TaskService {
  // tasksUrl:string = "https://jsonplaceholder.typicode.com/todos";
  tasksUrl:string = "http://localhost:5001/tasks";
  tasksLimit:string = '?_limit=5';

  constructor(private myHttpClient:HttpClient) { }

  // get tasks
  getTasks():Observable<Task[]> {
    // return this.myHttpClient.get<Task[]>(`${this.tasksUrl}${this.tasksLimit}`);
    return this.myHttpClient.get<Task[]>(this.tasksUrl);
  }

  // update tasks (toggle)
  toggleCompleted(task: Task):Observable<any> {
    const updateTaskUrl = `${this.tasksUrl}/${task.id}`;
    return this.myHttpClient.put(updateTaskUrl, task, httpOptions);
  }

  // delete task
  deleteTask(task: Task):Observable<any> {
    const deleteTaskUrl = `${this.tasksUrl}/${task.id}`;
    return this.myHttpClient.delete<Task>(deleteTaskUrl);
  }

  // add new task
  addTask(task: Task):Observable<any> {
    return this.myHttpClient.post<Task>(this.tasksUrl, task, httpOptions);
  }
}
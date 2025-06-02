import { Component, OnInit } from '@angular/core';
import { ToDoModel } from '../Models/ToDoModel';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-ToDo',
  templateUrl: './ToDo.component.html',
  styleUrls: ['./ToDo.component.css'],
  standalone: true,
  imports: [FormsModule, CommonModule],
})
export class ToDoComponent implements OnInit {
  taskList: ToDoModel[] = [];
  taskText: string = '';
  constructor() {}

  loadTasksFromStorage() {
    const storedTasks = localStorage.getItem('taskList');
    if (storedTasks) {
      this.taskList = JSON.parse(storedTasks);
    }
  }

  saveTasksToStorage() {
    localStorage.setItem('taskList', JSON.stringify(this.taskList));
  }

  addTask() {
    if (!this.taskText || !this.taskText.trim()) {
      Swal.fire({
        title: 'Empty Task!',
        text: 'Please add a task',
        icon: 'error',
      });
    } else {
      this.taskList.push({
        id: Date.now(),
        title: this.taskText,
        isDone: false,
      });
      this.taskText = '';
      this.saveTasksToStorage();
    }
  }

  deleteTask(id: number) {
    this.taskList = this.taskList.filter((task) => task.id !== id);
    this.saveTasksToStorage();
  }

  toggleDone(id: number) {
    this.taskList = this.taskList.map((task) =>
      task.id === id ? { ...task, isDone: !task.isDone } : task
    );
    this.saveTasksToStorage;
  }

  ngOnInit() {
    this.loadTasksFromStorage();
  }
}

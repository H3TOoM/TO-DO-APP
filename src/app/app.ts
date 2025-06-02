import { Component } from '@angular/core';
import { ToDoComponent } from './ToDo/ToDo.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [ToDoComponent,CommonModule,FormsModule],
  standalone: true,
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'to-do-list';
}

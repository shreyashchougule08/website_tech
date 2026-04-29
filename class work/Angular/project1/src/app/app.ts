import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Home } from '../home/home';
import { Addstudent } from '../addstudent/addstudent';
import { Studentlist } from '../studentlist/studentlist';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Home,Addstudent,Studentlist],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('project1');
  
}

import { Component } from '@angular/core';
import { Studentservice } from '../services/studentservice';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-studentlist',
  imports: [CommonModule,Studentlist],
  templateUrl: './studentlist.html',
  styleUrl: './studentlist.css',
})
export class Studentlist {
  students :any []=[];
  constructor(private studentservice:Studentservice) {
}
ngonInit() {           // Call the service method to get the students ,
  this.students=this.studentservice.getStudents();
  console.log(this.students);
}
/**
 * 
 */
}
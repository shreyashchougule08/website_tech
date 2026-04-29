import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Studentservice {
  students = [
    { name: 'Shreyash', city: 'Pune' },
    { name: 'Rahul', city: 'Mumbai' },
    { name: 'Sanket', city: 'Nashik' },
    { name: 'Rohit', city: 'Nagpur' },
  ];
 getStudents() {
    return this.students;
  }

}

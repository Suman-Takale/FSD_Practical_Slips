import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
students = [
    { name: 'Suman', percentage: 85 },
    { name: 'Rahul', percentage: 72 },
    { name: 'Priya', percentage: 85 },
    { name: 'Amit', percentage: 90 },
    { name: 'Sneha', percentage: 85 }
  ];

  students85: string[] = [];

  ngOnInit(): void {

    this.students85 = this.students
      .filter(student => student.percentage === 85)
      .map(student => student.name);

  }
}

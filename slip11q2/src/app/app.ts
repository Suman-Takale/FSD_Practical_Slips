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
    { name: 'Suman', sport: 'Basketball' },
    { name: 'Rahul', sport: 'Cricket' },
    { name: 'Priya', sport: 'Basketball' },
    { name: 'Amit', sport: 'Football' },
    { name: 'Sneha', sport: 'Basketball' }
  ];

  basketballPlayers: string[] = [];

  ngOnInit(): void {

    this.basketballPlayers = this.students
      .filter(student => student.sport === 'Basketball')
      .map(student => student.name);

  }}

import { Component, OnInit } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { UserService, User } from './user';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [AsyncPipe],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {

  users$!: Observable<User[]>;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.users$ = this.userService.getUsers();
  }
}
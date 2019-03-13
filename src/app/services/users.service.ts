import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import {User} from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  users: User[];
  isAuthorized: boolean;
  role: string;
  login: string;
  userId: number;
  logEvent: Subject<string>;

  constructor() {
    this.isAuthorized = false;
    this.users = require('../test-data/users-list.json').items;
    this.logEvent = new Subject<string>();
  }

  auth2(login: string, password: string): boolean {
    const user: User = this.users.find(us => login.toUpperCase() === us.email.toUpperCase());
    if (typeof user === 'undefined') {
      return false;
    } else {
      if (user.password === password) {
        this.role = user.role;
        this.login = user.email;
        this.userId = user.id;
        this.isAuthorized = true;
        this.logEvent.next('login');
        return true;
      } else {
        return false;
      }
    }
  }
  logOut() {
    this.isAuthorized = false;
    this.role = undefined;
    this.login = undefined;
    this.userId = undefined;
    this.isAuthorized = false;
    this.logEvent.next('logout');
  }
  getSubject(): Subject<string> {
    return this.logEvent;
  }

  isAdmin(): boolean {
    return (this.role === 'admin');
  }
  getAllUser() {
    return this.users;
  }
}

import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { Router } from '@angular/router';

import {UsersService} from '../../services/users.service';
import {User} from '../../models/user';

@Component({
  selector: 'app-auth-page',
  templateUrl: './auth-page.component.html',
  styleUrls: ['./auth-page.component.scss']
})
export class AuthPageComponent implements OnInit {

  constructor(private usersService: UsersService,
              private router: Router) {
   }

  ngOnInit() {
  }

  onSubmit(loginForm: NgForm) {
    if (loginForm.valid) {
      console.log(loginForm.value.login)
      console.log(loginForm.value.password)
      if (this.usersService.auth2(loginForm.value.login, loginForm.value.password)) {
        this.router.navigateByUrl('/');
      } else {
        alert('Неверный пароль');
      }

    }
  }

  getAllUsers(): User[] {
    return this.usersService.getAllUser();
  }

}

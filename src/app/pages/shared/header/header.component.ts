import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {UsersService} from '../../../services/users.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public usersService: UsersService,
              private router: Router) {

  }

  ngOnInit() {
  }
  login() {
    this.router.navigateByUrl('/auth');
  }
  logOut() {
    this.usersService.logOut();
  }
}

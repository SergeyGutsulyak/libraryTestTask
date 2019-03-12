import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {Book} from '../../models/book';
import {BooksStorageService} from '../../services/books-storage.service';
import {UsersService} from '../../services/users.service';

@Component({
  selector: 'app-favorite-book-page',
  templateUrl: './favorite-book-page.component.html',
  styleUrls: ['./favorite-book-page.component.scss']
})
export class FavoriteBookPageComponent implements OnInit {

  bookList: Book[];

  constructor(private booksStorageService: BooksStorageService,
              private usersService: UsersService,
              private router: Router) {
                this.usersService.getSubject().subscribe(ev => {
                  if (ev === 'logout') {
                    this.router.navigateByUrl('/');
                  }
                });
               }

  ngOnInit() {
    this.bookList = this.booksStorageService.getLikedBooks(this.usersService.userId);
  }
}

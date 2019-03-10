import { Component, OnInit } from '@angular/core';

import {Book} from '../../models/book'
import {BooksStorageService} from '../../services/books-storage.service';

@Component({
  selector: 'app-book-list-page',
  templateUrl: './book-list-page.component.html',
  styleUrls: ['./book-list-page.component.scss']
})
export class BookListPageComponent implements OnInit {

  bookList: Book[];

  constructor(private booksStorageService: BooksStorageService) { }

  ngOnInit() {
    this.bookList = this.booksStorageService.getAllBooks();
  }

}

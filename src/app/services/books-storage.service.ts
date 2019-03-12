import { Injectable } from '@angular/core';

import {Book} from '../models/book';

@Injectable({
  providedIn: 'root'
})
export class BooksStorageService {
  bookList: Book[];
  filterdBookList: Book[];
  constructor() {
    this.bookList = [];
    const bookListJ = require('../test-data/book-list.json').items;
    bookListJ.forEach(element => {
      this.bookList.push(new Book(element));
    });
    this.filterdBookList = this.bookList;
   }
   getAllBooks(): Book[] {
     return this.bookList;
   }
   getFilteredBooks(): Book[] {
    return this.filterdBookList;
   }
   searchBooks(searchString: string) {
    this.filterdBookList = [];
    this.bookList.forEach(book => {
      if (book.isFoundString(searchString)) {
        this.filterdBookList.push(book);
      }
    });
   }
   getLikedBooks(idUser: number): Book[] {
    return this.bookList.filter(book => {
      // console.log(book.isLiked(idUser))
      return book.isLiked(idUser);
    });
   }
}

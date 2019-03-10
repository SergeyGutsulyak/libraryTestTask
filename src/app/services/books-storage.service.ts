import { Injectable } from '@angular/core';

import {Book} from '../models/book';

@Injectable({
  providedIn: 'root'
})
export class BooksStorageService {
  bookList: Book[];
  constructor() {
    this.bookList = [];
    const bookListJ = require('../test-data/book-list.json').items;
    // console.log(bookListJ);
    bookListJ.forEach(element => {
      this.bookList.push(new Book(element));
    });
    console.log(this.bookList);
   }
   getAllBooks(): Book[]{
     return this.bookList;
   }
}

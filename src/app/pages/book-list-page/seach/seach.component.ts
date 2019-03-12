import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import {BooksStorageService} from '../../../services/books-storage.service';

@Component({
  selector: 'app-seach',
  templateUrl: './seach.component.html',
  styleUrls: ['./seach.component.scss']
})
export class SeachComponent implements OnInit {
  @Output()
  updateSerch: EventEmitter<void> = new EventEmitter();

  constructor(private booksStorageService: BooksStorageService) {
   }

  ngOnInit() {
  }

  searchBook(seartchString: string) {
     this.booksStorageService.searchBooks(seartchString);
     this.updateSerch.emit();
  }
}

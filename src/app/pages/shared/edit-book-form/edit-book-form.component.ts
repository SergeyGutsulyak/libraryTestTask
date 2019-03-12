import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgForm} from '@angular/forms';
import {Book} from '../../../models/book';
import {Shop} from '../../../models/shop';
import {ShopsService} from '../../../services/shops.service';
@Component({
  selector: 'app-edit-book-form',
  templateUrl: './edit-book-form.component.html',
  styleUrls: ['./edit-book-form.component.scss']
})
export class EditBookFormComponent implements OnInit {
  newShopIds: number[];
  notAddedShopsIds: number[];
  newName: string;
  newGenre: string;
  newBriefDescription: string;

  @Input()
  public book: Book;

  @Output()
  private eventForm: EventEmitter<void>;

  constructor(private shopsService: ShopsService) {
    this.eventForm = new EventEmitter<void>();
   }

  ngOnInit() {
    this.newName = this.book.bookName;
    this.newGenre = this.book.bookGenre;
    this.newBriefDescription = this.book.bookBriefDescription;
    this.newShopIds = [...this.book.bookShopList];

    const allShopsIds = this.shopsService.getIds();
    this.notAddedShopsIds = allShopsIds.filter(el => {
      if (this.newShopIds.indexOf(el) + 1) {
        return false;
      } else {
        return true;
      }
    });
  }

  addShop(id: number) {
    this.newShopIds.push(id);
    const pos = this.notAddedShopsIds.indexOf(id);
    this.notAddedShopsIds.splice(pos, 1);
  }

  delShop(id: number) {
    this.notAddedShopsIds.push(id);
    const pos = this.newShopIds.indexOf(id);
    this.newShopIds.splice(pos, 1);
  }

  getAllShop(): Shop[] {
    return this.shopsService.getAllShop();
  }

  getShop(id: number): Shop {
    return this.shopsService.getShopById(id);
  }

  changeBook(editForm: NgForm) {
    if (editForm.valid) {
      this.book.bookName = this.newName;
      this.book.bookGenre = this.newGenre;
      this.book.bookBriefDescription = this.newBriefDescription;
      this.book.bookShopList = this.newShopIds;
      this.eventForm.emit();
    }

  }
  close() {
    this.eventForm.emit();
  }
}

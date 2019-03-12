import { Component, OnInit, Input, OnChanges } from '@angular/core';

import {ShopsService} from '../../../services/shops.service';
import {UsersService} from '../../../services/users.service';
import {Book} from '../../../models/book';
import {Shop} from '../../../models/shop';

@Component({
  selector: 'app-book-line',
  templateUrl: './book-line.component.html',
  styleUrls: ['./book-line.component.scss']
})
export class BookLineComponent implements OnInit {
  public isFull: boolean;
  public isLikeFromCurUser: boolean;
  public editMode: boolean;
  @Input()
  public book: Book;

  constructor(public shopsService: ShopsService,
              public usersService: UsersService) {
    this.isFull = false;
    this.usersService.getSubject().subscribe(el => {
      this.calcLikeFromCurUser();
    });
  }

  ngOnInit() {
    this.calcLikeFromCurUser();
  }

  getShop(id: number): Shop {
    return this.shopsService.getShopById(id);
  }

  changeView() {
    this.isFull = this.isFull ? false : true ;
  }
  changeLike() {
    if (this.usersService.isAuthorized) {
      if (this.book.isLiked(this.usersService.userId)) {
        this.book.delLike(this.usersService.userId);
      } else {
        this.book.addLike(this.usersService.userId);
      }
      this.calcLikeFromCurUser();
    }
  }

  calcLikeFromCurUser() {
    if (this.usersService.isAuthorized) {
      if (this.book.isLiked(this.usersService.userId)) {
        this.isLikeFromCurUser = true;
      } else {
        this.isLikeFromCurUser = false;
      }
    } else {
      this.isLikeFromCurUser = false; }
  }

  isCanEdit(): boolean {
    if (this.isFull && this.usersService.isAuthorized &&  this.usersService.isAdmin()) {
      return true;
    } else {
      return false;
    }
  }
  editBook() {
    this.editMode = true;
  }
  endEdit() {
    this.editMode = false;
  }
}

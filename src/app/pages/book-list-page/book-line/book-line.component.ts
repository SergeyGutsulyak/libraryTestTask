import { Component, OnInit, Input } from '@angular/core';

import {ShopsService} from '../../../services/shops.service';
import {Book} from '../../../models/book';
import {Shop} from '../../../models/shop';


@Component({
  selector: 'app-book-line',
  templateUrl: './book-line.component.html',
  styleUrls: ['./book-line.component.scss']
})
export class BookLineComponent implements OnInit {
  public isFull: boolean;

  @Input()
  public book: Book;

  constructor(public shopsService: ShopsService) { 
    this.isFull = false; 
  }

  ngOnInit() {
  }

  getShop(id: number): Shop{
    return this.shopsService.getShopById(id);
  }

  changeView() {
    this.isFull = this.isFull ? false: true ;
  }
}

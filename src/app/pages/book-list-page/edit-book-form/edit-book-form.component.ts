import { Component, OnInit, Input } from '@angular/core';
import { NgForm} from '@angular/forms';
// import { FormGroup, FormControl, Validators} from '@angular/forms';
import {Book} from '../../../models/book'
import {Shop} from '../../../models/shop';
import {ShopsService} from '../../../services/shops.service';
@Component({
  selector: 'app-edit-book-form',
  templateUrl: './edit-book-form.component.html',
  styleUrls: ['./edit-book-form.component.scss']
})
export class EditBookFormComponent implements OnInit {
  // editBookForm: FormGroup;
  shopIds: number[];
  notAddedShopsIds: number[];

  @Input()
  public curBook: Book;

  constructor(private shopsService: ShopsService) {
    this.shopIds = [];
    // this.editBookForm = new FormGroup({
    //   "bookName": new FormControl('',Validators.required),
    //   "bookGenre": new FormControl('',Validators.required),
    //   "bookBriefDescription": new FormControl('',Validators.required),
    //   "shopId": new FormControl('')
    // })
   }

  ngOnInit() {
    this.notAddedShopsIds = this.shopsService.getIds();
  }

  addShop(id: number){
    this.shopIds.push(id);
    let pos = this.notAddedShopsIds.indexOf(id);
    this.notAddedShopsIds.splice(pos,1);
  }

  delShop(id: number){
    this.notAddedShopsIds.push(id);
    let pos = this.shopIds.indexOf(id);
    this.shopIds.splice(pos,1);
  }

  getAllShop(): Shop[]{
    return this.shopsService.getAllShop();
  }

  getShop(id: number) :Shop{
    return this.shopsService.getShopById(id);
  }

  changeBook(){
    console.log('Изменить книгу');
  }
  close(){
    console.log('close')
  }
}

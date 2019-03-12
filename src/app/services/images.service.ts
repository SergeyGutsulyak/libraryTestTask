import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImagesService {
  listImage: string[];
  constructor() {
    this.listImage = require('../test-data/books-cover.json').items;
   }

  getCovers(): string[] {
    return this.listImage;
  }
}


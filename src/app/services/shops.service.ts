import { Injectable } from '@angular/core';

import {Shop} from '../models/shop'

@Injectable({
  providedIn: 'root'
})
export class ShopsService {
  shopList: Shop[];
  constructor() {
    this.shopList =  require('../test-data/shop-list.json').items;
  }

  getIds(): number[] {
    return this.shopList.map(shop => {
      return shop.id;
    });
  }

  getShopById(id: number): Shop {
    return this.shopList.find(shop => {
      return shop.id === id;
    });
  }

  getAllShop(): Shop[] {
    return this.shopList;
  }
}

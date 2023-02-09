import { Injectable } from '@angular/core';
import {Dictionary} from "../model/dictionary";

@Injectable({
  providedIn: 'root'
})
export class DictionaryService {
  dictionarys: Dictionary[] = [{
    id: 1, english: 'Red', vietNames: 'Màu đỏ'
  },
    {
      id: 2, english: 'Yellow', vietNames: 'Màu vàng'
    },
    {
      id: 3, english: 'Violet', vietNames: 'Màu tím'
    },
    {
      id: 4, english: 'Blue', vietNames: 'Màu xanh dương'
    },
    {
      id: 5, english: 'White', vietNames: 'Màu trắng'
    },]

  private number: number | undefined;

  constructor() {
  }

  getAll() {
    return this.dictionarys;
  }


  findById(number: number) {
    let temp = this.dictionarys.filter(element => element.id == number);
    if (temp.length==0){
      return null;
    }
    return temp[0];
  }
}

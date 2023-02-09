import { Component, OnInit } from '@angular/core';
import {Product} from "../model/product";
import {ProductService} from "../service/product.service";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
product: Product[] = [];
temp: Product ={};
  constructor(private productService: ProductService) {
  }

  allList(){
    this.productService.getAll().subscribe(data=>{
      this.product = data;
    })
  }

  ngOnInit(): void {
    this.allList();
  }

  delete(id : number | undefined) {
this.productService.delete(this.temp.id).subscribe(next=>{
  alert("Xóa thành công")
  this.ngOnInit();
})
  }
}

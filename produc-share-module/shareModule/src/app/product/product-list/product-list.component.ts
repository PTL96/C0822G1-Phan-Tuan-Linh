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
temp: Product = {};

  constructor(private productService: ProductService) {

  }

  ngOnInit(): void {
    this.getAll()
  }

  getAll(){
    this.productService.getALl().subscribe(data=>{
      this.product = data;
      console.log(this.product)
    })
  }

deleteProduct(id: number | undefined){
    this.productService.delete(this.temp.id).subscribe(next=>{
      alert("Xóa thành công")
      this.ngOnInit();
    })
}
}

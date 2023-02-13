import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Category} from "../model/category";
import {ProductService} from "../service/product.service";
import {CategoryService} from "../service/category.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  category: Category[] = [];


  createForm: FormGroup = new FormGroup({
    id: new FormControl(),
    code: new FormControl(),
    name: new FormControl(),
    price: new FormControl(),
    starDay: new FormControl(),
    origin: new FormControl(),
    other: new FormControl(),
    category: new FormControl()
  });

  constructor(private productService: ProductService,
              private categoryService: CategoryService,
              private router: Router) {
    this.categoryService.getAll().subscribe(data => {
      this.category = data;
      console.log(this.category)
    })
  }

  ngOnInit(): void {
  }

  createSubmit() {
let product = this.createForm.value
    this.productService.save(product).subscribe(next=>{
      alert("Thêm mới thành công")
      this.router.navigateByUrl("/")
    })
  }
}

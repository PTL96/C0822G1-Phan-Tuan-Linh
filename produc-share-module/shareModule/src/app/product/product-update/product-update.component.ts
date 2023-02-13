import {Component, OnInit} from '@angular/core';
import {ProductService} from "../service/product.service";
import {CategoryService} from "../service/category.service";
import {ActivatedRoute, Router} from "@angular/router";
import {FormControl, FormGroup} from "@angular/forms";
import {Category} from "../model/category";
import {Product} from "../model/product";

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {
  updateForm: FormGroup = new FormGroup({});
  category: Category[] = [];
  product: Product = {};

  constructor(private  productService: ProductService,
              private categoryService: CategoryService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
    this.activatedRoute.paramMap.subscribe(data => {
      const id = data.get("id");
      if (id != null) {
        this.productService.findById(parseInt(id)).subscribe(next => {
          this.product = next;
          this.updateForm = new FormGroup({
            id: new FormControl(this.product.id),
            code: new FormControl(this.product.code),
            name: new FormControl(this.product.name),
            price: new FormControl(this.product.price),
            starDay: new FormControl(this.product.starDay),
            origin: new FormControl(this.product.origin),
            other: new FormControl(this.product.other),
            category: new FormControl(this.product.category)
          });
          this.categoryService.getAll().subscribe(cate=>{
            this.category = cate;
          })
        })
      }
    })
  }

  ngOnInit(): void {
  }

  updateSubmit() {
    let product: Product
     product = this.updateForm.value
    this.productService.update(product).subscribe(ok => {
      alert("Chỉnh sửa thành công")
      this.router.navigateByUrl("/")
    })
  }
}

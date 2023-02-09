import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Category} from "../model/category";
import {CategoryService} from "../service/category.service";
import {ProductService} from "../service/product.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Product} from "../model/product";

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {
  updateForm: FormGroup = new FormGroup({});
  category: Category[] = [];
  product: Product | null | undefined;

  constructor(private categoryService: CategoryService,
              private productService: ProductService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
    this.activatedRoute.paramMap.subscribe(data => {
      const id = data.get("id");
      if (id != null) {
        this.productService.findById(parseInt(id)).subscribe(next => {
          console.log(id)
          this.product = next;
          this.updateForm = new FormGroup({
            id: new FormControl(),
            code: new FormControl(this.product?.code),
            name: new FormControl(this.product?.name),
            price: new FormControl(this.product?.price),
            origin: new FormControl(this.product?.origin),
            other: new FormControl(this.product?.other),
            category: new FormControl(this.product?.category?.name)
          });
          this.categoryService.getAll().subscribe(cate => {
            this.category = cate;
          })
        });

      }
    })
  }

  ngOnInit(): void {
  }

  update() {
    let product: Product;
    product = this.updateForm.value
    this.productService.update(product).subscribe(ok=>{
      alert("Cập nhật thành công")
      this.router.navigateByUrl('/')
    })
  }
}

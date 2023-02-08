import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Customer} from "../model/customer";
import {CustomerType} from "../model/customer-type";
import {CustomerTypeService} from "../service/customer-type.service";
import {CustomerService} from "../service/customer.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-customer-update',
  templateUrl: './customer-update.component.html',
  styleUrls: ['./customer-update.component.css']
})
export class CustomerUpdateComponent implements OnInit {
  updateForm: FormGroup | undefined;
  customer: Customer | null | undefined;
  customerType: CustomerType[] = [];

  constructor(private customertypeService: CustomerTypeService,
              private customerService: CustomerService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
    this.activatedRoute.paramMap.subscribe(temp => {
      const id = temp.get('id')
      if (id != null) {
        this.customerService.findById(parseInt(id)).subscribe(data => {
          console.log(data)
          this.customer = data;
          this.updateForm = new FormGroup({
            id: new FormControl(this.customer?.id),
            name: new FormControl(this.customer?.name),
            dayOfBirth: new FormControl(this.customer?.dayOfBirth),
            gender: new FormControl(this.customer?.gender),
            idCard: new FormControl(this.customer?.idCard),
            phoneNumber: new FormControl(this.customer?.phoneNumber),
            email: new FormControl(this.customer?.email),
            address: new FormControl(this.customer?.address),
            customerType: new FormControl(this.customer?.customerType)
          });
          console.log(this.updateForm.value)
          this.customertypeService.getAll().subscribe(data => {
            this.customerType = data;
          }, error => {

          }, () => {
          });
        })
      }
    })
  }

  updateCustomer() {
    let customer: Customer;
    customer = this.updateForm?.value;
    if (this.updateForm?.valid) {
      this.customerService.update(customer).subscribe(data => {
        this.router.navigateByUrl("/customer/list");
        alert("Updated")
      })
    } else {
      alert("Please check the information again")
    }
  }

  compareWith(object1: CustomerType, object2: CustomerType): boolean {
    return object1 && object2 ? object1.id == object2.id : object1 == object2;
  }

  ngOnInit(): void {
  }

}

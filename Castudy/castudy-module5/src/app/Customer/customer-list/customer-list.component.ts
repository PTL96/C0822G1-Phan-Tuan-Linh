import {Component, OnInit} from '@angular/core';
import {Customer} from "../model/customer";
import {CustomerService} from "../service/customer.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  customer: Customer[] = [];
  temp: Customer = {};
  p: number = 0;

  constructor(private customerService: CustomerService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.getAllCustomer()
  }

  getAllCustomer() {
    this.customerService.getAll().subscribe(data => {
      this.customer = data;
    })
  }

  deleteCustomer(): void {
    this.customerService.delete(this.temp.id).subscribe(data => {
      alert("Deleted");
      this.router.navigateByUrl("/customer/list");
      this.ngOnInit()
    }, error1 => {

    }, () => {

    })
  }

  search(value: string, value2: string) {
    this.customerService.search(value, value2).subscribe(data => {
      this.customer = data;
    })
  }
}

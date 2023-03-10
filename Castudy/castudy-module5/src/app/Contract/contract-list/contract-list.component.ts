import { Component, OnInit } from '@angular/core';
import {ContractService} from "../service/contract.service";
import {Contract} from "../model/contract";

@Component({
  selector: 'app-contract-list',
  templateUrl: './contract-list.component.html',
  styleUrls: ['./contract-list.component.css']
})
export class ContractListComponent implements OnInit {
contract : Contract[] = [];
p: number = 0;
temp : Contract = {};

  constructor(private contractService: ContractService) { }

  ngOnInit(): void {
    this.getAllContract()
  }

  getAllContract(){
    this.contractService.getAll().subscribe(data=>{
      this.contract = data;
      console.log(this.contract);
    })
  }

}

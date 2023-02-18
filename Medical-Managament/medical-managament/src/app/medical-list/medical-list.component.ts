import {Component, OnInit} from '@angular/core';
import {MedicalService} from "../service/medical.service";
import {Medical} from "../model/medical";

@Component({
  selector: 'app-medical-list',
  templateUrl: './medical-list.component.html',
  styleUrls: ['./medical-list.component.css']
})
export class MedicalListComponent implements OnInit {
medical: Medical[] = [];
temp: Medical = {};
  number: number | undefined;
  totalPages: number | undefined;
  pageNumbers: number[];
  first: boolean | undefined;
  last: boolean;
  constructor(private medicalService: MedicalService) {
  }

  ngOnInit(): void {
    this.getAllList()
  }

getAllList(){
    this.medicalService.getAll().subscribe(data=>{
      console.log(data)
      this.medical = data;
    })

}
deleteMedical(id: number | undefined){
    this.medicalService.delete(this.temp.id).subscribe(deleted=>{
      alert("Xóa thành công");
      this.ngOnInit();
    })
}

  getAllPage(page: number) {
    this.medicalService.getAllPage(page).subscribe(next => {
      console.log(next);
      this.medical = next.content;
      this.number = next.number;
      this.totalPages = next.totalPages;
      this.first = next.first;
      this.last = next.last;
    });
  }
}

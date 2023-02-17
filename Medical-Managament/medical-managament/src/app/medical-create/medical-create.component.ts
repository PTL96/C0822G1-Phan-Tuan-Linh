import {Component, OnInit} from '@angular/core';
import {PatientService} from "../service/patient.service";
import {MedicalService} from "../service/medical.service";
import {Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Patient} from "../model/patient";
import {Medical} from "../model/medical";

@Component({
  selector: 'app-medical-create',
  templateUrl: './medical-create.component.html',
  styleUrls: ['./medical-create.component.css']
})
export class MedicalCreateComponent implements OnInit {
  patient: Patient[] = [];
  createForm: FormGroup = new FormGroup({
    id: new FormControl(),
    medicalCode: new FormControl(),
    hospitalizedDay: new FormControl('', [Validators.required]),
    hospitalDischargeDate: new FormControl('', [Validators.required]),
    reason: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(100)]),
    treatments: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(100)]),
    doctor: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(50)]),
    patient: new FormControl('', [Validators.required])
  });

  constructor(private patientService: PatientService,
              private medicalService: MedicalService,
              private router: Router) {
    this.patientService.getAll().subscribe(data => {
      this.patient = data;
    })
  }

  ngOnInit(): void {
  }

  create() {
    let medical : Medical;
    medical = this.createForm.value;
    if(this.createForm.valid){
      this.medicalService.save(medical).subscribe(next=>{
        alert("Thêm mới thành công");
        this.router.navigateByUrl('/')
      })
    }else {
      alert("Vui lòng kiểm tra lại thông tin")
    }
  }
}

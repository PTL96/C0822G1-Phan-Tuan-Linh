import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {MedicalService} from "../service/medical.service";
import {PatientService} from "../service/patient.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Medical} from "../model/medical";
import {Patient} from "../model/patient";

@Component({
  selector: 'app-medical-update',
  templateUrl: './medical-update.component.html',
  styleUrls: ['./medical-update.component.css']
})
export class MedicalUpdateComponent implements OnInit {
  updateForm: FormGroup = new FormGroup({});
  medical: Medical = {};
  patient: Patient[] = [];

  constructor(private medicalService: MedicalService,
              private patientService: PatientService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
    this.activatedRoute.paramMap.subscribe(ok => {
      const id = ok.get("id");
      if (id != null) {
        this.medicalService.findById(parseInt(id)).subscribe(next => {
          this.medical = next;
          this.updateForm = new FormGroup({
            id: new FormControl(this.medical.id),
            medicalCode: new FormControl(this.medical.medicalCode),
            hospitalizedDay: new FormControl(this.medical.hospitalizedDay, [Validators.required]),
            hospitalDischargeDate: new FormControl(this.medical.hospitalDischargeDate, [Validators.required]),
            reason: new FormControl(this.medical.reason, [Validators.required, Validators.minLength(5), Validators.maxLength(100)]),
            treatments: new FormControl(this.medical.treatments, [Validators.required, Validators.minLength(5), Validators.maxLength(100)]),
            doctor: new FormControl(this.medical.doctor, [Validators.required, Validators.minLength(5), Validators.maxLength(50)]),
            patient: new FormControl(this.medical.patient, [Validators.required])
          });
          this.patientService.getAll().subscribe(data => {
            this.patient = data;
          })
        })

      }
    })
  }

  ngOnInit(): void {
  }

  update() {
    let medical: Medical;
    medical = this.updateForm.value;
    if(this.updateForm.valid){
      this.medicalService.update(medical).subscribe(temp=>{
        alert("Cập nhật thành công");
        this.router.navigateByUrl("/")
      })
    }else {
      alert("Vui lòng kiểm tra lại thông tin")
    }
  }
}

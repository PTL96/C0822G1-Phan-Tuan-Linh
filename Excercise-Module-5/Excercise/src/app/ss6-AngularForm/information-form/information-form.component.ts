import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-information-form',
  templateUrl: './information-form.component.html',
  styleUrls: ['./information-form.component.css']
})
export class InformationFormComponent implements OnInit {
  fomReactive: FormGroup;
  @Output()
  eventCreate = new EventEmitter()

  constructor() {
    this.fomReactive = new FormGroup({
      id: new FormControl("5", [Validators.required, Validators.min(0)]),
      name: new FormControl("", [Validators.required, Validators.minLength(5), Validators.maxLength(50)]),
      idCard: new FormControl('',[Validators.required, Validators.pattern("[0-9]{9}|[0-9]{12}")]),
      dayOfBirth: new FormControl("",[Validators.required]),
      phoneNumber: new FormControl("",[Validators.required, Validators.pattern("[0][0-9]{9}")]),
      address: new FormControl("",[Validators.required, Validators.minLength(5), Validators.maxLength(100)])
    })
  }

  ngOnInit(): void {
  }

  saveInformation() {

  }
}

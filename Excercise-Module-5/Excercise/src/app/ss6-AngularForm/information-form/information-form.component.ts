import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-information-form',
  templateUrl: './information-form.component.html',
  styleUrls: ['./information-form.component.css']
})
export class InformationFormComponent implements OnInit {
  fomReactive: FormGroup;
  countryList = [
    {id: 1, name: 'Việt Nam'},
    {id: 2, name: 'Trung Quốc'},
    {id: 3, name: 'Nhật Bản'}
  ];
  @Output()
  eventCreate = new EventEmitter()

  constructor() {
    this.fomReactive = new FormGroup({
      id: new FormControl("5", [Validators.required, Validators.min(0)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      passwordGroup: new FormGroup({
        password: new FormControl('', [Validators.required, Validators.minLength(6)]),
        confirmPassword: new FormControl('', [Validators.required, Validators.minLength(6)])
      }, this.checkConfirm),
      country: new FormControl('', [Validators.required]),
      age: new FormControl('', [Validators.required, Validators.min(18)]),
      gender: new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.required, Validators.pattern('^\\+84\\d{9,10}$')])
    })
  }

  ngOnInit(): void {
  }
  checkConfirm(group: AbstractControl) {
    let passwordCheck = group.value;
    if (passwordCheck.password === passwordCheck.confirmPassword) {
      return null;
    }
    return {'check18': true};
  }
  saveInformation() {

  }
}

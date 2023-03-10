import { Component, OnInit } from '@angular/core';
import {Dictionary} from "../model/dictionary";
import {DictionaryService} from "../service/dictionary.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-dictionary',
  templateUrl: './dictionary.component.html',
  styleUrls: ['./dictionary.component.css']
})
export class DictionaryComponent implements OnInit {
  dictionary: Dictionary[] = []
  constructor(private dictionaryService: DictionaryService, private router: Router) {
    this.dictionary = this.dictionaryService.getAll();
  }

  ngOnInit(): void {
  }
  showDetail(english:string){
    this.router.navigate(["/dictionary/detail/",english])
  }

}

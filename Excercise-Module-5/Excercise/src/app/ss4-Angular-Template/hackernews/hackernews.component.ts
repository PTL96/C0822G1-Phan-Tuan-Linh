import { Component, OnInit } from '@angular/core';
import {Article} from "../article";

@Component({
  selector: 'app-hackernews',
  templateUrl: './hackernews.component.html',
  styleUrls: ['./hackernews.component.css']
})
export class HackernewsComponent implements OnInit {
  article: Article = {
    title: 'The Evolution of Async JavaScript: From Callbacks, to Promises, to Async/Await',
    url: 'https://medium.freecodecamp.org/the-evolution-of-async-javascript-from-callbacks-to-promises-to-async-await-e73b047f2f40'
  };  articles: Article [] =[
    { title :'The Evolution of Async JavaScript: From Callbacks, to Promises, to Async/Await',
      url : 'https://www.freecodecamp.org/news'},
    {
      title: 'Game of Life',
      url: 'https://thefullsnack.com/posts/game-of-life.html'
    },
    {
      title: 'Nguyên tắc thiết kế REST API',
      url: 'https://medium.com/eway/nguyên-tắc-thiết-kế-rest-api-23add16968d7'
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }
  addNewArticle() {
    this.articles.push(this.article);
  }
}

import { Component, OnInit } from '@angular/core';
import { Article } from '../shared/model/article'

@Component({
  selector: 'at-stories-add',
  templateUrl: './stories-add.component.html',
  styleUrls: ['./stories-add.component.css']
})
export class StoriesAddComponent implements OnInit {
  article : Article= {};

  constructor() { }

  ngOnInit() {
  }

  add(article){

  }
}

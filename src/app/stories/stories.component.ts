import { Component, OnInit } from '@angular/core';
import { Article } from '../shared/model/article'
import { ArticleService } from '../shared/services/article-service'
import { Router } from '@angular/router'

@Component({
  selector: 'at-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.css']
})
export class StoriesComponent implements OnInit {
  
  articleTitle: string = `Today's top stories`;
  articles: Article[];
  
  constructor(private articleService: ArticleService,
              private router: Router) {

               }

  ngOnInit() {
    this.articleService.getArticles()
    .subscribe((data) => {
      console.log('Data', data)
      this.articles = data;
    });
  }

  onSelect(event: Article){
    console.log('Selected', event);
    this.router.navigate(['stories', event.id]);
  }

}
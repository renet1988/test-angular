import { Component, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { Article } from '../shared/model/article';
import { ArticleService } from '../shared/services/article-service';


@Component({
  selector: 'at-stories-edit',
  templateUrl: './stories-edit.component.html',
  styleUrls: ['./stories-edit.component.css']
})
export class StoriesEditComponent implements OnInit {

  article: Article = {};

  constructor(private activatedRoute: ActivatedRoute,
              private articleService: ArticleService
              ) { }

  ngOnInit() {
    this.activatedRoute.params
    .subscribe(params => {
      this.articleService.getArticle(params.id)
      .subscribe((article: Article) => {
        this.article = article;
        this.article['fixedTitle'] = article.title;
      });
    });
  }
}
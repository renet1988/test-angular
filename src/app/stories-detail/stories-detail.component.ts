import { Component, EventEmitter, OnInit } from '@angular/core';
import { Article } from '../shared/model/article'
import { ActivatedRoute, Router} from '@angular/router'
import { ArticleService } from '../shared/services/article-service'

@Component({
  selector: 'at-stories-detail',
  templateUrl: './stories-detail.component.html',
  styleUrls: ['./stories-detail.component.css']
})
export class StoriesDetailComponent implements OnInit {
  article: Article;

  constructor(private activatedRoute: ActivatedRoute,
              private articleSevice: ArticleService,
              private router: Router) { }


  ngOnInit() {
    this.activatedRoute.params
    .subscribe(params => {
      this.articleSevice.getArticle(params.id)
      .subscribe((article: Article) => {
        this.article = article;
      });
    });
  }

  onEdit(article: Article){
    this.router.navigate(['stories', article.id, 'edit']);
  }

}

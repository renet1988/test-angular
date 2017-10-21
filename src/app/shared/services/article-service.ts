import { Injectable } from '@angular/core';
import { Article } from '../model/article'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs/Observable'

const ARTICLES = 'http://localhost:3000/posts';

@Injectable()
export class ArticleService {
  
  
  constructor(private httpClient : HttpClient) { 

  }

  getArticles(): Observable<any> {
    return this.httpClient.get(`${ARTICLES}`);
  }

  getArticle(id: number): Observable<any> {
    return this.httpClient.get(`${ARTICLES}/${id}`);
  }

  postArticle(article: Article): Observable<any> {
    return this.httpClient.post(`${ARTICLES}`, article);
  }
}
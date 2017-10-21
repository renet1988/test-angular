import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from './material/material.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { StoriesComponent } from './stories/stories.component';
import { ArticleService } from './shared/services/article-service';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { StoriesDetailComponent } from './stories-detail/stories-detail.component';
import { StoriesEditComponent } from './stories-edit/stories-edit.component'
import { FormsModule } from '@angular/forms';
import { StoriesAddComponent } from './stories-add/stories-add.component'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    StoriesComponent,
    StoriesDetailComponent,
    StoriesEditComponent,
    StoriesAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule, 
    HttpClientModule,
    FormsModule
  ],
  providers: [
    ArticleService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

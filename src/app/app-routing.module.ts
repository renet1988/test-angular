import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component'
import { StoriesComponent } from './stories/stories.component'
import { StoriesDetailComponent } from './stories-detail/stories-detail.component'
import { StoriesEditComponent } from './stories-edit/stories-edit.component'
import { StoriesAddComponent } from './stories-add/stories-add.component'

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'stories',
    component: StoriesComponent
  },
  {
    path: 'stories/:id',
    component: StoriesDetailComponent
  },
  {
    path: 'stories/:id/edit',
    component: StoriesEditComponent
  },
  {
    path: 'add',
    component: StoriesAddComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

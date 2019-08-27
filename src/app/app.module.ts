import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PostListComponentComponent } from './post-list-component/post-list-component.component';
import { PostListItemComponentComponent } from './post-list-item-component/post-list-item-component.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NewPostComponentComponent } from './new-post-component/new-post-component.component';
import {PostService} from './services/post.service';

import {Routes, RouterModule} from '@angular/router'; 

const appRoutes: Routes = [
  {path: 'posts', component: PostListComponentComponent},
  {path: 'new', component: NewPostComponentComponent},
  {path:'**', redirectTo: '/posts'}
];


@NgModule({
  declarations: [
    AppComponent,
    PostListComponentComponent,
    PostListItemComponentComponent,
    NewPostComponentComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }

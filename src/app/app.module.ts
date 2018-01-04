import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {PostService} from './service/post/post.service';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AddPostComponent } from './component/add-post/add-post.component';
import { ListPostComponent } from './component/list-post/list-post.component';
import { ReloadPostsComponent } from './component/reload-posts/reload-posts.component';
import { ShowCountComponent } from './component/show-count/show-count.component';
import { IAddPost } from './interface/iadd-post.interface';
import { IListPosts } from './interface/ilist-posts.interface';
import { IShowCount } from './interface/ishow-count.interface';
import { IReloadPosts } from './interface/ireload-posts.interface';

@NgModule({
  declarations: [
    AppComponent,
    AddPostComponent,
    ListPostComponent,
    ReloadPostsComponent,
    ShowCountComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    PostService,
    {provide: IAddPost, useExisting: PostService},
    {provide: IListPosts, useExisting: PostService},
    {provide: IShowCount, useExisting: PostService},
    {provide: IReloadPosts, useExisting: PostService}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {IPostService} from './interface/ipost-service.interface';
import {PostService} from './service/post/post.service';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AddPostComponent } from './component/add-post/add-post.component';
import { ListPostComponent } from './component/list-post/list-post.component';
import { ReloadPostsComponent } from './component/reload-posts/reload-posts.component';
import { ShowCountComponent } from './component/show-count/show-count.component';

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
    {provide: IPostService, useClass: PostService}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

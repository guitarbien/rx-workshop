import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {IPostService} from './interface/ipost-service.interface';
import {PostService} from './service/post/post.service';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
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

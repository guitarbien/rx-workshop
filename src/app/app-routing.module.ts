import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexPostComponent } from './component/index-post/index-post.component';
import { IndexCounterComponent } from './component/index-counter/index-counter.component';

const routes: Routes = [
  {path: '', redirectTo: 'counter', pathMatch: 'full'},
  {path: 'counter', component: IndexCounterComponent},
  {path: 'post/:id', component: IndexPostComponent},
  {path: 'post', component: IndexPostComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

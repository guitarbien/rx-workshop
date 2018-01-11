import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CounterComponent } from './component/counter/counter.component';
import { IndexPostComponent } from './component/index-post/index-post.component';

const routes: Routes = [
  {path: '', redirectTo: 'post', pathMatch: 'full'},
  {path: 'counter', component: CounterComponent},
  {path: 'post/:id', component: IndexPostComponent},
  {path: 'post', component: IndexPostComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

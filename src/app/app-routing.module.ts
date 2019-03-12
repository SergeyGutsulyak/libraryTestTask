import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {BookListPageComponent} from './pages/book-list-page/book-list-page.component';
import {AuthPageComponent} from './pages/auth-page/auth-page.component';
import {FavoriteBookPageComponent} from './pages/favorite-book-page/favorite-book-page.component';
const routes: Routes = [
  { path: '', component: BookListPageComponent},
  { path: 'auth', component: AuthPageComponent},
  { path: 'favorite-book', component: FavoriteBookPageComponent},
  { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

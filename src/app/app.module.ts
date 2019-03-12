import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookListPageComponent } from './pages/book-list-page/book-list-page.component';
import { AuthPageComponent } from './pages/auth-page/auth-page.component';
import { EditBookFormComponent } from './pages/shared/edit-book-form/edit-book-form.component';
import { BookLineComponent } from './pages/shared/book-line/book-line.component';
import { SeachComponent } from './pages/book-list-page/seach/seach.component';
import { HeaderComponent } from './pages/shared/header/header.component';
import { FavoriteBookPageComponent } from './pages/favorite-book-page/favorite-book-page.component';

@NgModule({
  declarations: [
    AppComponent,
    BookListPageComponent,
    AuthPageComponent,
    EditBookFormComponent,
    BookLineComponent,
    SeachComponent,
    HeaderComponent,
    FavoriteBookPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

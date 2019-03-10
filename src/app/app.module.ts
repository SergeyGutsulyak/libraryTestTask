import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookListPageComponent } from './pages/book-list-page/book-list-page.component';
import { AuthPageComponent } from './pages/auth-page/auth-page.component';
import { EditBookFormComponent } from './pages/book-list-page/edit-book-form/edit-book-form.component';
import { SelectImageComponent } from './pages/book-list-page/edit-book-form/select-image/select-image.component';
import { BookLineComponent } from './pages/book-list-page/book-line/book-line.component';

@NgModule({
  declarations: [
    AppComponent,
    BookListPageComponent,
    AuthPageComponent,
    EditBookFormComponent,
    SelectImageComponent,
    BookLineComponent
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

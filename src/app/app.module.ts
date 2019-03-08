import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookListPageComponent } from './pages/book-list-page/book-list-page.component';
import { AuthPageComponent } from './pages/auth-page/auth-page.component';
import { EditBookFormComponent } from './pages/book-list-page/edit-book-form/edit-book-form.component';
import { SelectImageComponent } from './pages/book-list-page/select-image/select-image.component';

@NgModule({
  declarations: [
    AppComponent,
    BookListPageComponent,
    AuthPageComponent,
    EditBookFormComponent,
    SelectImageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoriteBookPageComponent } from './favorite-book-page.component';

describe('FavoriteBookPageComponent', () => {
  let component: FavoriteBookPageComponent;
  let fixture: ComponentFixture<FavoriteBookPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavoriteBookPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoriteBookPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

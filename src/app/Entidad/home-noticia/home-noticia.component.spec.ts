import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeNoticiaComponent } from './home-noticia.component';

describe('HomeNoticiaComponent', () => {
  let component: HomeNoticiaComponent;
  let fixture: ComponentFixture<HomeNoticiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeNoticiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeNoticiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

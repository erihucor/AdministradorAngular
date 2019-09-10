import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CabezeraNoticiaComponent } from './cabezera-noticia.component';

describe('CabezeraNoticiaComponent', () => {
  let component: CabezeraNoticiaComponent;
  let fixture: ComponentFixture<CabezeraNoticiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CabezeraNoticiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CabezeraNoticiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

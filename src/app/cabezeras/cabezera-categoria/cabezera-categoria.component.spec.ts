import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CabezeraCategoriaComponent } from './cabezera-categoria.component';

describe('CabezeraCategoriaComponent', () => {
  let component: CabezeraCategoriaComponent;
  let fixture: ComponentFixture<CabezeraCategoriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CabezeraCategoriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CabezeraCategoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

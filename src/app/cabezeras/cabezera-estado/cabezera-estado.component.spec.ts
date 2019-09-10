import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CabezeraEstadoComponent } from './cabezera-estado.component';

describe('CabezeraEstadoComponent', () => {
  let component: CabezeraEstadoComponent;
  let fixture: ComponentFixture<CabezeraEstadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CabezeraEstadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CabezeraEstadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

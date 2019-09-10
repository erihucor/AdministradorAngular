import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CabezeraEventoComponent } from './cabezera-evento.component';

describe('CabezeraEventoComponent', () => {
  let component: CabezeraEventoComponent;
  let fixture: ComponentFixture<CabezeraEventoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CabezeraEventoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CabezeraEventoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

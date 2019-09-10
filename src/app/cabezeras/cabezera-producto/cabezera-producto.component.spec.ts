import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CabezeraProductoComponent } from './cabezera-producto.component';

describe('CabezeraProductoComponent', () => {
  let component: CabezeraProductoComponent;
  let fixture: ComponentFixture<CabezeraProductoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CabezeraProductoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CabezeraProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CabezeraPedidoComponent } from './cabezera-pedido.component';

describe('CabezeraPedidoComponent', () => {
  let component: CabezeraPedidoComponent;
  let fixture: ComponentFixture<CabezeraPedidoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CabezeraPedidoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CabezeraPedidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

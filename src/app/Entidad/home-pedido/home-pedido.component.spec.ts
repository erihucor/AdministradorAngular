import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePedidoComponent } from './home-pedido.component';

describe('HomePedidoComponent', () => {
  let component: HomePedidoComponent;
  let fixture: ComponentFixture<HomePedidoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomePedidoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePedidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

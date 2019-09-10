import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeEstadoComponent } from './home-estado.component';

describe('HomeEstadoComponent', () => {
  let component: HomeEstadoComponent;
  let fixture: ComponentFixture<HomeEstadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeEstadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeEstadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

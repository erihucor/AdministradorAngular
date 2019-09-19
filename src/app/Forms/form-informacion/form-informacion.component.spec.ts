import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormInformacionComponent } from './form-informacion.component';

describe('FormInformacionComponent', () => {
  let component: FormInformacionComponent;
  let fixture: ComponentFixture<FormInformacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormInformacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormInformacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

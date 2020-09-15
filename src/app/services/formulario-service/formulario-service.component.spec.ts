import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioServiceComponent } from './formulario-service.component';

describe('FormularioServiceComponent', () => {
  let component: FormularioServiceComponent;
  let fixture: ComponentFixture<FormularioServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormularioServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

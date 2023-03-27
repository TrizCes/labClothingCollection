import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormColecaoComponent } from './form-colecao.component';

describe('FormColecaoComponent', () => {
  let component: FormColecaoComponent;
  let fixture: ComponentFixture<FormColecaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormColecaoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormColecaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardOrcamentoMedioComponent } from './card-orcamento-medio.component';

describe('CardOrcamentoMedioComponent', () => {
  let component: CardOrcamentoMedioComponent;
  let fixture: ComponentFixture<CardOrcamentoMedioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardOrcamentoMedioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardOrcamentoMedioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

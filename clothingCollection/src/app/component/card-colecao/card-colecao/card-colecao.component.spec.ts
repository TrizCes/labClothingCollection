import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardColecaoComponent } from './card-colecao.component';

describe('CardColecaoComponent', () => {
  let component: CardColecaoComponent;
  let fixture: ComponentFixture<CardColecaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardColecaoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardColecaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

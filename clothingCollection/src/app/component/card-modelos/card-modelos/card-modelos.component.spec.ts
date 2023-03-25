import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardModelosComponent } from './card-modelos.component';

describe('CardModelosComponent', () => {
  let component: CardModelosComponent;
  let fixture: ComponentFixture<CardModelosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardModelosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardModelosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

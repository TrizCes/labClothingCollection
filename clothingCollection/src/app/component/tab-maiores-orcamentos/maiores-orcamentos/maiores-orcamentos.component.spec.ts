import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaioresOrcamentosComponent } from './maiores-orcamentos.component';

describe('MaioresOrcamentosComponent', () => {
  let component: MaioresOrcamentosComponent;
  let fixture: ComponentFixture<MaioresOrcamentosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaioresOrcamentosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaioresOrcamentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

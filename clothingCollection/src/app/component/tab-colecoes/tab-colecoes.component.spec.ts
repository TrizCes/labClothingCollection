import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabColecoesComponent } from './tab-colecoes.component';

describe('TabColecoesComponent', () => {
  let component: TabColecoesComponent;
  let fixture: ComponentFixture<TabColecoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabColecoesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabColecoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

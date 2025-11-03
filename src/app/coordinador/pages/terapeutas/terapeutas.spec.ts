import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Terapeutas } from './terapeutas';

describe('Terapeutas', () => {
  let component: Terapeutas;
  let fixture: ComponentFixture<Terapeutas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Terapeutas]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Terapeutas);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

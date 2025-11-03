import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsistenteIa } from './asistente-ia';

describe('AsistenteIa', () => {
  let component: AsistenteIa;
  let fixture: ComponentFixture<AsistenteIa>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AsistenteIa]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsistenteIa);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

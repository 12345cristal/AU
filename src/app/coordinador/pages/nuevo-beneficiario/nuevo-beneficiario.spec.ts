import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoBeneficiario } from './nuevo-beneficiario';

describe('NuevoBeneficiario', () => {
  let component: NuevoBeneficiario;
  let fixture: ComponentFixture<NuevoBeneficiario>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NuevoBeneficiario]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NuevoBeneficiario);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

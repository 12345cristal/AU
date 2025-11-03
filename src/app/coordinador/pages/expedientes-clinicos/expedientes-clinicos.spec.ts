import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpedientesClinicos } from './expedientes-clinicos';

describe('ExpedientesClinicos', () => {
  let component: ExpedientesClinicos;
  let fixture: ComponentFixture<ExpedientesClinicos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExpedientesClinicos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpedientesClinicos);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

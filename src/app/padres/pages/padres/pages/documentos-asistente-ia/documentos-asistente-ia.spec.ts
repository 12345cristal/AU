import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentosAsistenteIa } from './documentos-asistente-ia';

describe('DocumentosAsistenteIa', () => {
  let component: DocumentosAsistenteIa;
  let fixture: ComponentFixture<DocumentosAsistenteIa>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DocumentosAsistenteIa]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocumentosAsistenteIa);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

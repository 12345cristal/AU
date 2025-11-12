import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompartirRecursos } from './compartir-recursos';

describe('CompartirRecursos', () => {
  let component: CompartirRecursos;
  let fixture: ComponentFixture<CompartirRecursos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompartirRecursos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompartirRecursos);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltrosAcceso } from './filtros-acceso';

describe('FiltrosAcceso', () => {
  let component: FiltrosAcceso;
  let fixture: ComponentFixture<FiltrosAcceso>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FiltrosAcceso]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FiltrosAcceso);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

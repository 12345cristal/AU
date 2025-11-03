import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParteClinica } from './parte-clinica';

describe('ParteClinica', () => {
  let component: ParteClinica;
  let fixture: ComponentFixture<ParteClinica>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParteClinica]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParteClinica);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

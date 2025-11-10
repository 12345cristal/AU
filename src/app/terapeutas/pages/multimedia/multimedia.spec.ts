import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Multimedia } from './multimedia';

describe('Multimedia', () => {
  let component: Multimedia;
  let fixture: ComponentFixture<Multimedia>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Multimedia]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Multimedia);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

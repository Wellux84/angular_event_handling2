import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Jsoncomp } from './jsoncomp';

describe('Jsoncomp', () => {
  let component: Jsoncomp;
  let fixture: ComponentFixture<Jsoncomp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Jsoncomp],
    }).compileComponents();

    fixture = TestBed.createComponent(Jsoncomp);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

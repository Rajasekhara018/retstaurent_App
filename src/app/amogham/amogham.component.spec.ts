import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmoghamComponent } from './amogham.component';

describe('AmoghamComponent', () => {
  let component: AmoghamComponent;
  let fixture: ComponentFixture<AmoghamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmoghamComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AmoghamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

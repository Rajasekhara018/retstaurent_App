import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DineoutPageComponent } from './dineout-page.component';

describe('DineoutPageComponent', () => {
  let component: DineoutPageComponent;
  let fixture: ComponentFixture<DineoutPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DineoutPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DineoutPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

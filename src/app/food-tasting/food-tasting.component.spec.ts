import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodTastingComponent } from './food-tasting.component';

describe('FoodTastingComponent', () => {
  let component: FoodTastingComponent;
  let fixture: ComponentFixture<FoodTastingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoodTastingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FoodTastingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

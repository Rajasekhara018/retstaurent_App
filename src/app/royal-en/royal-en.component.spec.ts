import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoyalEnComponent } from './royal-en.component';

describe('RoyalEnComponent', () => {
  let component: RoyalEnComponent;
  let fixture: ComponentFixture<RoyalEnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoyalEnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoyalEnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

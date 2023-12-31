import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SouthIndianComponent } from './south-indian.component';

describe('SouthIndianComponent', () => {
  let component: SouthIndianComponent;
  let fixture: ComponentFixture<SouthIndianComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SouthIndianComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SouthIndianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

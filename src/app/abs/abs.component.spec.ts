import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ABsComponent } from './abs.component';

describe('ABsComponent', () => {
  let component: ABsComponent;
  let fixture: ComponentFixture<ABsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ABsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ABsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

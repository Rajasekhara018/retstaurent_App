import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenAirComponent } from './open-air.component';

describe('OpenAirComponent', () => {
  let component: OpenAirComponent;
  let fixture: ComponentFixture<OpenAirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpenAirComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OpenAirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

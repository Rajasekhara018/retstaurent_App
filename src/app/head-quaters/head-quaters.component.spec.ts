import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadQuatersComponent } from './head-quaters.component';

describe('HeadQuatersComponent', () => {
  let component: HeadQuatersComponent;
  let fixture: ComponentFixture<HeadQuatersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeadQuatersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeadQuatersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

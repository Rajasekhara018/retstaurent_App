import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProceesPayComponent } from './procees-pay.component';

describe('ProceesPayComponent', () => {
  let component: ProceesPayComponent;
  let fixture: ComponentFixture<ProceesPayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProceesPayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProceesPayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

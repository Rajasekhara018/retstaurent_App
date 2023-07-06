import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExoticaComponent } from './exotica.component';

describe('ExoticaComponent', () => {
  let component: ExoticaComponent;
  let fixture: ComponentFixture<ExoticaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExoticaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExoticaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

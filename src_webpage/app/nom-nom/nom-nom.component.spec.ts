import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NomNOmComponent } from './nom-nom.component';

describe('NomNOmComponent', () => {
  let component: NomNOmComponent;
  let fixture: ComponentFixture<NomNOmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NomNOmComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NomNOmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

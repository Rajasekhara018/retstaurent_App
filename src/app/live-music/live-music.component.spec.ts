import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveMusicComponent } from './live-music.component';

describe('LiveMusicComponent', () => {
  let component: LiveMusicComponent;
  let fixture: ComponentFixture<LiveMusicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LiveMusicComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LiveMusicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

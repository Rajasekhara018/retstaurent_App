import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageUploadPracticeComponent } from './image-upload-practice.component';

describe('ImageUploadPracticeComponent', () => {
  let component: ImageUploadPracticeComponent;
  let fixture: ComponentFixture<ImageUploadPracticeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImageUploadPracticeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImageUploadPracticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

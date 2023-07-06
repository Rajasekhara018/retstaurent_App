import { Component, OnInit } from '@angular/core';
// import { ImageServiceService } from '../image-service.service';

@Component({
  selector: 'app-image-upload-practice',
  templateUrl: './image-upload-practice.component.html',
  styleUrls: ['./image-upload-practice.component.scss']
})
export class ImageUploadPracticeComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  // selectedFile: ImageSnippet;

  // constructor(private imageService: ImageServiceService){}

  // processFile(imageInput: any) {
  //   const file: File = imageInput.files[0];
  //   const reader = new FileReader();

  //   reader.addEventListener('load', (event: any) => {

  //     this.selectedFile = new ImageSnippet(event.target.result, file);

  //     this.imageService.uploadImage(this.selectedFile.file).subscribe(
  //       (res) => {

  //       },
  //       (err) => {

  //       })
  //   });

  //   reader.readAsDataURL(file);
  // }
}

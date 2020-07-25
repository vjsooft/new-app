import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  galtit:string="our gallery";
  imageObject: Array<object> = [
    {
      image: 'assets/Images/1.webp',
      thumbImage: 'assets/Images/1.webp',
      alt: 'alt of image',
    }, {
      image: 'assets/Images/2.webp',
      thumbImage: 'assets/Images/2.webp',
      alt: 'Image alt'
    }, {
      image: 'assets/Images/3.webp',
      thumbImage: 'assets/Images/3.webp',
      alt: 'Image alt'
    }, {
      image: 'assets/Images/4.webp',
      thumbImage: 'assets/Images/4.webp',
      alt: 'Image alt'
    }, {
      image: 'assets/Images/5.webp',
      thumbImage: 'assets/Images/5.webp',
      alt: 'Image alt'
    }, {
      image: 'assets/Images/6.webp',
      thumbImage: 'assets/Images/6.webp',
      alt: 'Image alt'
    }, {
      image: 'assets/Images/7.webp',
      thumbImage: 'assets/Images/7.webp',
      alt: 'Image alt'
    }, {
      image: 'assets/Images/8.webp',
      thumbImage: 'assets/Images/8.webp',
      alt: 'Image alt'
    }, {
      image: 'assets/Images/9.webp',
      thumbImage: 'assets/Images/9.webp',
      alt: 'Image alt'
    }, {
      image: 'assets/Images/10.webp',
      thumbImage: 'assets/Images/10.webp',
      alt: 'Image alt'
    }, {
      image: 'assets/Images/11.webp',
      thumbImage: 'assets/Images/11.webp',
      alt: 'Image alt'
    }, {
      image: 'assets/Images/12.webp',
      thumbImage: 'assets/Images/12.webp',
      alt: 'Image alt'
    }, {
      image: 'assets/Images/13.webp',
      thumbImage: 'assets/Images/13.webp',
      alt: 'Image alt'
    }, {
      image: 'assets/Images/14.webp',
      thumbImage: 'assets/Images/14.webp',
      alt: 'Image alt'
    }
  ];
}

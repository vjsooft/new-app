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
      image: 'assets/Images/1.jpg',
      thumbImage: 'assets/Images/1.jpg',
      alt: 'alt of image',
    }, {
      image: 'assets/Images/2.jpg',
      thumbImage: 'assets/Images/2.jpg',
      alt: 'Image alt'
    }, {
      image: 'assets/Images/3.jpg',
      thumbImage: 'assets/Images/3.jpg',
      alt: 'Image alt'
    }, {
      image: 'assets/Images/4.jpg',
      thumbImage: 'assets/Images/4.jpg',
      alt: 'Image alt'
    }, {
      image: 'assets/Images/5.jpg',
      thumbImage: 'assets/Images/5.jpg',
      alt: 'Image alt'
    }, {
      image: 'assets/Images/6.jpg',
      thumbImage: 'assets/Images/6.jpg',
      alt: 'Image alt'
    }, {
      image: 'assets/Images/7.jpg',
      thumbImage: 'assets/Images/7.jpg',
      alt: 'Image alt'
    }, {
      image: 'assets/Images/8.jpg',
      thumbImage: 'assets/Images/8.jpg',
      alt: 'Image alt'
    }, {
      image: 'assets/Images/9.jpg',
      thumbImage: 'assets/Images/9.jpg',
      alt: 'Image alt'
    }, {
      image: 'assets/Images/10.jpg',
      thumbImage: 'assets/Images/10.jpg',
      alt: 'Image alt'
    }, {
      image: 'assets/Images/11.jpg',
      thumbImage: 'assets/Images/11.jpg',
      alt: 'Image alt'
    }, {
      image: 'assets/Images/12.jpg',
      thumbImage: 'assets/Images/12.jpg',
      alt: 'Image alt'
    }, {
      image: 'assets/Images/13.jpg',
      thumbImage: 'assets/Images/13.jpg',
      alt: 'Image alt'
    }, {
      image: 'assets/Images/14.jpg',
      thumbImage: 'assets/Images/14.jpg',
      alt: 'Image alt'
    }
  ];
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  icons=[
    {iconslink:'', iconsimg:'assets/Images/foot-fb.webp', iconalt:'FB Icon'}, 
    {iconslink:'', iconsimg:'assets/Images/foot-twit.webp', iconalt:'Twiter Icon'}, 
    {iconslink:'', iconsimg:'assets/Images/foot-insta.webp', iconalt:'Inst Icon'}, 
    {iconslink:'', iconsimg:'assets/Images/foot-yelp.webp', iconalt:'Yelp Icon'}, 
  ]
}

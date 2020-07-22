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
    {iconslink:'', iconsimg:'assets/Images/foot-fb.png', iconalt:'FB Icon'}, 
    {iconslink:'', iconsimg:'assets/Images/foot-twit.png', iconalt:'Twiter Icon'}, 
    {iconslink:'', iconsimg:'assets/Images/foot-insta.png', iconalt:'Inst Icon'}, 
    {iconslink:'', iconsimg:'assets/Images/foot-yelp.png', iconalt:'Yelp Icon'}, 
  ]
}

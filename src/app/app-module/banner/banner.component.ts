import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  title:string="Roofing Insurance claims specialists";
  mutedStatus:any = '';
  soundImg:string = 'mute-icon.png';



  toggleMute(img) {
    if (img == 'mute-icon.png') {
      this.soundImg= 'unmute.png'
      this.mutedStatus = false;
  
    }
    else {
      this.soundImg= 'mute-icon.webp'
      this.mutedStatus = true;
  
    }
}
}

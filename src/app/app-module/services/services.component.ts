import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  sertit:string="our services";
  services = [
    {serlink:'asphalt-shingles', serimg:'assets/Images/shingle-roof.webp', sertit:'ASPHALT SHINGLES'},
    {serlink:'clay-tiles', serimg:'assets/Images/clay-tile.webp', sertit:'CLAY TILES'},
    {serlink:'concrete-tiles', serimg:'assets/Images/concrete-tile.webp', sertit:'CONCRETE TILES'},
    {serlink:'single-ply', serimg:'assets/Images/shingle-ply.webp', sertit:'SINGLE PLY'},
    {serlink:'metal-roofing', serimg:'assets/Images/metal-roof.webp', sertit:'METAL ROOFING'},
    {serlink:'commercial-gutters', serimg:'assets/Images/commercial-gutters.webp', sertit:'COMMERCIAL GUTTERS'},
  ]
}

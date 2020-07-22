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
    {serlink:'asphalt-shingles', serimg:'assets/Images/shingle-roof.png', sertit:'ASPHALT SHINGLES'},
    {serlink:'clay-tiles', serimg:'assets/Images/clay-tile.png', sertit:'CLAY TILES'},
    {serlink:'concrete-tiles', serimg:'assets/Images/concrete-tile.png', sertit:'CONCRETE TILES'},
    {serlink:'single-ply', serimg:'assets/Images/shingle-ply.png', sertit:'SINGLE PLY'},
    {serlink:'metal-roofing', serimg:'assets/Images/metal-roof.png', sertit:'METAL ROOFING'},
    {serlink:'commercial-gutters', serimg:'assets/Images/commercial-gutters.png', sertit:'COMMERCIAL GUTTERS'},
  ]
}

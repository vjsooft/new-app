import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  navigation = [
    {menulink:'home', menuname:'home'}, 
    {menulink:'about', menuname:'about'}, 
    {menulink:'services', menuname:'services'}, 
    {menulink:'gallery', menuname:'gallery'}, 
    {menulink:'contact', menuname:'contact us'}
  ]
  change_efect=false;
  @HostListener("document:scroll")
  scrollfunction(){
    if(document.body.scrollTop > 0 || document.documentElement.scrollTop > 0){
      this.change_efect=true;
    }
    else{
      this.change_efect=false;
    }
  }
}

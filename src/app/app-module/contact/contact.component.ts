import { Component, OnInit } from '@angular/core';
//import { ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    
  }
  onSubmit(form:HTMLFormElement){
      console.log(form);
  }
  contit:string="contact";
  addresses = [
    {addid:'Arizona', addtit:'Arizona', addone:'3100 W. Ray Road', adtwo:'Suite 201', addthree:'Chandler AZ 85226', addno:'(480) 917-7663', addmail:'info@singhcontractinggroup.com'},
    {addid:'New Mexico', addtit:'New Mexico', addone:'500 Marquette Ave NW', adtwo:'Suite 1200', addthree:'Albuquerque NM 87102', addno:'(505) 883-7663', addmail:'info@singhcontractinggroup.com'},
    {addid:'Colorado',addtit:'Colorado', addone:'3100 W. Ray Road', adtwo:'Suite 201', addthree:'Chandler AZ 85226', addno:'(480) 917-7663', addmail:'info@singhcontractinggroup.com'},
    {addid:'Kansas', addtit:'Kansas', addone:'3100 W. Ray Road', adtwo:'Suite 201', addthree:'Chandler AZ 85226', addno:'(480) 917-7663', addmail:'info@singhcontractinggroup.com'},
    {addid:'Wyoming', addtit:'Wyoming', addone:'3100 W. Ray Road', adtwo:'Suite 201', addthree:'Chandler AZ 85226', addno:'(480) 917-7663', addmail:'info@singhcontractinggroup.com'},
  ]
}

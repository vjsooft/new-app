import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { from } from 'rxjs';

import { MustMatch } from './must-match.validator';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false; 
    
  fullname:string="";
  email:string="";
  phoneno:any="";
  subject:string="";
  message:string="";

  constructor(private frmBuilder:FormBuilder) { }
    
  ngOnInit() {
    this.registerForm = this.frmBuilder.group({
      fullname: ['', Validators.required],
      emailid: ['', [Validators.required, Validators.email]],
      phoneno: ['', Validators.required],
      subject: ['', Validators.required],
      message: ['', Validators.required],
  },{
    validator: MustMatch('fullname', 'emailid')
});
  }
  
   // convenience getter for easy access to form fields
   get f() { return this.registerForm.controls; }

   onSubmit() {
    //alert("hi");
       this.submitted = true;

       // stop here if form is invalid
       if (this.registerForm.invalid) {
           return;
       }

       // display form values on success
       alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));
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

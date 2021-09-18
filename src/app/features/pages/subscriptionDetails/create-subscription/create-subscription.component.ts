import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators,FormBuilder} from '@angular/forms';
@Component({
  selector: 'app-create-subscription',
  templateUrl: './create-subscription.component.html',
  styleUrls: ['./create-subscription.component.css']
})
export class CreateSubscriptionComponent implements OnInit {

  crateSubscription:FormGroup;
  submitted=
  false;
  constructor() { 
    this.crateSubscription = new FormGroup({
      'memberId' : new FormControl('', [Validators.required]),
      'payment' : new FormControl('',[Validators.required]),
      'paymentDate' : new FormControl('',[Validators.required]),
      'mobileNumber' : new FormControl('',[Validators.required]),
      'aadharNumber' : new FormControl('',[Validators.required]),
      'memberName' : new FormControl('',[Validators.required]),
      'fatherName' : new FormControl('',[Validators.required]),
      'address' : new FormControl('',[Validators.required]),
      'city' : new FormControl('',[Validators.required]),
    })
  }

  ngOnInit(): void {
  }
  submitSubscription(){

  }
  resetForm(){
    
  }
}

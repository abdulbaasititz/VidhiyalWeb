import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators,FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-create-customers',
  templateUrl: './create-customers.component.html',
  styleUrls: ['./create-customers.component.css']
})
export class CreateCustomersComponent implements OnInit {
  crateCustomer:FormGroup;
  submitted=
  false;
  constructor() { 
    this.crateCustomer = new FormGroup({
      'memberId' : new FormControl('', [Validators.required]),
      'intialAmount' : new FormControl('',[Validators.required]),
      'paymentDate' : new FormControl('',[Validators.required]),
      'memberName' : new FormControl('',[Validators.required]),
      'fatherName' : new FormControl('',[Validators.required]),
      'mobileNumber' : new FormControl('',[Validators.required]),
      'email' : new FormControl('',[Validators.required]),
      'address' : new FormControl('',[Validators.required]),
      'city' : new FormControl('',[Validators.required]),
      'aadharNumber' : new FormControl('',[Validators.required]),
      'subscriptionType' : new FormControl('',[Validators.required]),
      'bankAccountNumber': new FormControl('',[Validators.required]),
      'ifscCode': new FormControl('',[Validators.required]),
      'bankBranch': new FormControl('',[Validators.required]),
    })
  }

  ngOnInit(): void {
  }
  submitCustomer(){

  }
  resetForm(){
    
  }
}

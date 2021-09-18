import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators,FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted= false;
  constructor() {
    this.logiFormInit();
   }

  ngOnInit(): void {
  }
  logiFormInit(){
    this.loginForm = new FormGroup({
      'userId' : new FormControl('', [Validators.required]),
      'password' : new FormControl('',Validators.required)
    })
   }
   submit_login(){
     
   }
}

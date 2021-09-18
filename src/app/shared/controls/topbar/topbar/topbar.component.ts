import { Component, OnInit,ElementRef,Inject,HostListener} from '@angular/core';
import { DOCUMENT } from '@angular/common';

import { Router } from '@angular/router';
@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {
  elem: any;
  isFullScreen: boolean;
  constructor(private element: ElementRef, @Inject(DOCUMENT) private document: any, public _router:Router) { }

  ngOnInit(): void {
    this.elem = document.documentElement;
  }
  @HostListener('document:fullscreenchange', ['$event'])
   @HostListener('document:webkitfullscreenchange', ['$event'])
   @HostListener('document:mozfullscreenchange', ['$event'])
   @HostListener('document:MSFullscreenChange', ['$event'])


fullscreenmodes(event:any){
      this.chkScreenMode();
    }
chkScreenMode(){
      if(document.fullscreenElement){
        //fullscreen
        this.isFullScreen = true;
      }else{
        //not in full screen
        this.isFullScreen = false;
      }
    }

  openFullscreen() {
     
    if (this.elem.requestFullscreen) {
      this.elem.requestFullscreen();
    } else if (this.elem.mozRequestFullScreen) {
      /* Firefox */
      this.elem.mozRequestFullScreen();
    } else if (this.elem.webkitRequestFullscreen) {
      /* Chrome, Safari and Opera */
      this.elem.webkitRequestFullscreen();
    } else if (this.elem.msRequestFullscreen) {
      /* IE/Edge */
      this.elem.msRequestFullscreen();
    }
  }
  /* Close fullscreen */
  closeFullscreen() {
     
    if (this.document.exitFullscreen) {
      this.document.exitFullscreen();
    } else if (this.document.mozCancelFullScreen) {
      /* Firefox */
      this.document.mozCancelFullScreen();
    } else if (this.document.webkitExitFullscreen) {
      /* Chrome, Safari and Opera */
      this.document.webkitExitFullscreen();
    } else if (this.document.msExitFullscreen) {
      /* IE/Edge */
      this.document.msExitFullscreen();
    }
  }

  showMenu(){
    var sidebar = document.querySelector('.sidebar');
    var mainCnt = document.querySelector('.main-content');
    // var logos = document.querySelector(".logo");
    // var smalllogo =document.querySelector(".small-logo");
    // var tlogo = this.document.querySelector('.t-logo ');
    var menuLeft = this.document.querySelector('.menu-left');
    mainCnt.classList.toggle('large-content');
    sidebar.classList.toggle("small-nav");
    // smalllogo.classList.toggle("hidden");
    // logos.classList.toggle("hidden");
    // tlogo.classList.toggle("hidden");

    // logos.classList.toggle("w-4");
    menuLeft.classList.toggle("ml-9");
    sidebar.classList.toggle("open");

   document.querySelectorAll(".nav-text").forEach((result) => {
      result.classList.toggle("hidden");
      });
      document.querySelectorAll(".v-icon").forEach((result) => {
        result.classList.toggle("hidden");
        });
  }
  showLog(){
    var log = document.querySelector('.logmenus');
    log.classList.toggle('hidden');
  }
  logOutUser(){
   
  }
}

import { Component, OnInit,ElementRef } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  constructor(private elem:ElementRef) { }

  ngOnInit(): void {
  }

  subsMenu(event:any){
    let sidebar = document.querySelector(".thirdlvl");
    sidebar.classList.toggle("d-none");

  }
  subsMenus(event:any){
    let sidebar = document.querySelector(".thirdlvls");
    sidebar.classList.toggle("d-none");

  }
}

import { HtmlAstPath } from '@angular/compiler';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @ViewChild('navbar') navbarRef!:  ElementRef<HTMLElement>;
  @ViewChild('dropdown') dropdownRef! : ElementRef<HTMLElement>;
  open:boolean = false;
  dropOpen:boolean  = false;
  constructor() { }

  ngOnInit(): void {
    
  }

  changeNavbarState(){
    
    this.navbarRef.nativeElement.style.top = this.open ? '-100%':'10rem'
    this.navbarRef.nativeElement.style.opacity = this.open ? '0':'1'
    
    this.open = !this.open
  }

  changeDropdownState() {
    this.dropdownRef.nativeElement.style.display = this.dropOpen ? "none":"flex";
    console.log("xd")
    this.dropOpen = !this.dropOpen;
  }
}

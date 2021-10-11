import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Article } from '../_models/article';

@Component({
  selector: 'app-hamburger',
  templateUrl: './hamburger.component.html',
  styleUrls: ['./hamburger.component.css']
})
export class HamburgerComponent implements OnInit {
  @Input() articles!: Article[];
  isHamburgerNavDisplayed: boolean = false;
  @ViewChild("hamburgerNav") hamburger!: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }
  onHamburgerClick() {
    if (!this.isHamburgerNavDisplayed) {
      this.hamburger.nativeElement.style.right = "10px";
      this.isHamburgerNavDisplayed = true;
    }
    else {
      this.hamburger.nativeElement.style.right = "-300px";
      this.isHamburgerNavDisplayed = false;
    }
    console.log(this.hamburger.nativeElement.innerHTML);
  }
}

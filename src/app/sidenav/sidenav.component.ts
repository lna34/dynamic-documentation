import { Component, Input, OnInit } from '@angular/core';
import { Article } from '../_models/article';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  @Input() articles!:Article[];
  
  constructor() { }

  ngOnInit(): void {
    
  }

}

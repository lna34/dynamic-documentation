import { Component, OnInit } from '@angular/core';
import { Article } from './_models/article';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'documentation-skeleton';
  articles!: Article[];

  ngOnInit(): void {
    this.articles = [
      {title: "A title", link: "a_link", content: "<p>Integer euismod lacus luctus magna. <i>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos</i>. Quisque cursus, metus vitae pharetra auctor, sem massa mattis sem, at interdum magna augue eget diam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae." },
      {title: "Another title", link: "another_link", content: "<p>Integer euismod lacus luctus magna. <i>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos</i>. Quisque cursus, metus vitae pharetra auctor, sem massa mattis sem, at interdum magna augue eget diam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae." },
      {title: "More titles", link: "more_link", content: "<p>Integer euismod lacus luctus magna. <i>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos</i>. Quisque cursus, metus vitae pharetra auctor, sem massa mattis sem, at interdum magna augue eget diam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae." },
    ]
  }  

}

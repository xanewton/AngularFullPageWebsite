import { Component, OnInit } from '@angular/core';
import { ContentService } from '../shared/services/content.service';


@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {

  page: Object;

  /*page = {
    title: 'Home',
    subtitle: 'Welcome Home!',
    content: 'Some home content.',
    image: 'assets/bg00.jpg'
  };*/

  constructor(
    private contentService: ContentService
  ) { }

  ngOnInit(): void {
    this.page = this.contentService.pages['home'];
  }

}

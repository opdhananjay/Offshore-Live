import { ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-careers',
  templateUrl: './careers.component.html',
  styleUrls: ['./careers.component.css']
})
export class CareersComponent {

  constructor(private viewportScroller: ViewportScroller,private titleService: Title, private metaTagService: Meta) {}

  onClick(elementId:string){
    this.viewportScroller.scrollToAnchor(elementId)
  }


  ngOnInit() {
    this.titleService.setTitle("Career Opportunities - Join HRSM Offshore Services LLP");

    this.metaTagService.addTags([
      { name: 'description', content: 'Explore exciting career opportunities at HRSM Offshore Services LLP. We offer a dynamic work environment and opportunities for growth in offshore recruitment and staffing solutions in Mumbai, India, and globally.' },
      { name: 'keywords', content: 'career opportunities, HRSM Offshore Services LLP, offshore recruitment careers, job openings, staffing solutions careers, join our team, career growth, Mumbai, India, global recruitment careers' },
      { name: 'robots', content: 'index, follow' },
      { property: 'og:title', content: 'Career Opportunities - Join HRSM Offshore Services LLP' },
      { property: 'og:description', content: 'Discover career opportunities at HRSM Offshore Services LLP. Join our team and grow your career in offshore recruitment and staffing solutions in Mumbai and worldwide.' },
      { name: 'twitter:title', content: 'Career Opportunities - Join HRSM Offshore Services LLP' },
      { name: 'twitter:description', content: 'Explore career opportunities with HRSM Offshore Services LLP. We offer roles in offshore recruitment and staffing solutions with growth potential in Mumbai and globally.' },
  
    ]);
  }
  

}

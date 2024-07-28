import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-permanent-recruitment',
  templateUrl: './permanent-recruitment.component.html',
  styleUrls: ['./permanent-recruitment.component.css']
})
export class PermanentRecruitmentComponent implements OnInit {


  constructor(private viewportScroller: ViewportScroller,private titleService: Title,
    private metaTagService: Meta) {}

  onClick(elementId:string){
    this.viewportScroller.scrollToAnchor(elementId)
  }

  ngOnInit(): void {
    this.titleService.setTitle("Permanent Recruitment - Offshore Staffing Solutions | HRSM Offshore Services LLP");

    this.metaTagService.addTags([
      { name: 'description', content: 'HRSM Offshore Services LLP offers comprehensive permanent recruitment and staffing solutions for the offshore industry. Our expertise in talent acquisition ensures the best candidates for your business in Mumbai, India, and globally.' },
      { name: 'keywords', content: 'permanent recruitment, offshore staffing, HRSM Offshore Services LLP, recruitment solutions, talent acquisition, staffing agency, hiring candidates, Mumbai, India, global recruitment, offshore industry' },
      { name: 'robots', content: 'index, follow' },
      { property: 'og:title', content: 'Permanent Recruitment - Offshore Staffing Solutions | HRSM Offshore Services LLP' },
      { property: 'og:description', content: 'Explore our permanent recruitment services designed for the offshore industry. HRSM Offshore Services LLP is dedicated to connecting businesses with top talent in Mumbai and around the world.' },
      { name: 'twitter:description', content: 'Discover HRSM Offshore Services LLP\'s permanent recruitment solutions. We specialize in providing top-tier offshore staffing and talent acquisition services globally.' },
    ]);
  }
  
  
}

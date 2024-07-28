
import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css'],
})
export class AboutUsComponent implements OnInit {


  constructor(private viewportScroller: ViewportScroller,private titleService: Title, private metaTagService: Meta) {}

  ngOnInit(): void {
    this.titleService.setTitle("About Us - HRSM Offshore Services LLP | Premier Offshore Recruitment Solutions in Mumbai, India");

    this.metaTagService.addTags([
      { name: 'description', content: 'Learn about HRSM Offshore Services LLP, a leading offshore recruitment and staffing solutions provider based in Mumbai, India. Committed to excellence, we offer services in renewables, oil and gas, marine, and construction sectors. Join us in building a brighter future.' },
      { name: 'keywords', content: 'HRSM Offshore Services LLP, about us, offshore recruitment, staffing solutions, Mumbai, India, renewables, oil and gas, marine, construction, global recruitment, talent acquisition, ethical standards, excellence, diversity, sustainability' },
      { name: 'robots', content: 'index, follow' },
      { property: 'og:title', content: 'About Us - HRSM Offshore Services LLP | Premier Offshore Recruitment Solutions in Mumbai, India' },
      { property: 'og:description', content: 'Discover HRSM Offshore Services LLP, a premier provider of offshore recruitment and staffing solutions in Mumbai, India. We specialize in renewables, oil and gas, marine, and construction sectors, committed to excellence and sustainability.' },
      { property: 'og:image', content: 'https://www.yourwebsite.com/assets/about-us.jpg' },
      { property: 'og:url', content: 'https://www.yourwebsite.com/about-us' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'About Us - HRSM Offshore Services LLP | Premier Offshore Recruitment Solutions in Mumbai, India' },
      { name: 'twitter:description', content: 'Explore HRSM Offshore Services LLP, a leading offshore recruitment and staffing solutions provider based in Mumbai, India. We focus on renewables, oil and gas, marine, and construction sectors, fostering excellence and sustainability.' },
      { name: 'twitter:image', content: 'https://www.yourwebsite.com/assets/about-us.jpg' }
    ]);

  }


  onClick(elementId:string){
    this.viewportScroller.scrollToAnchor(elementId)
  }
  

}

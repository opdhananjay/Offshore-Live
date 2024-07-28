import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-drilling',
  templateUrl: './drilling.component.html',
  styleUrls: ['./drilling.component.css']
})
export class DrillingComponent implements OnInit {

  constructor(private titleService: Title, private metaTagService: Meta) { }

  ngOnInit() {
    this.titleService.setTitle("Drilling Services - Offshore Drilling Solutions | HRSM Offshore Services LLP");

    this.metaTagService.addTags([
      { name: 'description', content: 'HRSM Offshore Services LLP provides top-tier offshore drilling services and solutions. Discover our expertise in drilling operations, safety, and efficiency in Mumbai, India, and globally.' },
      { name: 'keywords', content: 'drilling services, offshore drilling, HRSM Offshore Services LLP, drilling operations, safety in drilling, efficient drilling solutions, Mumbai, India, global drilling services, offshore industry' },
      { name: 'robots', content: 'index, follow' },
      { property: 'og:title', content: 'Drilling Services - Offshore Drilling Solutions | HRSM Offshore Services LLP' },
      { property: 'og:description', content: 'Explore HRSM Offshore Services LLP\'s comprehensive drilling services. We specialize in providing efficient and safe drilling solutions for the offshore industry in Mumbai and worldwide.' },
      { name: 'twitter:title', content: 'Drilling Services - Offshore Drilling Solutions | HRSM Offshore Services LLP' },
      { name: 'twitter:description', content: 'Discover our top-tier offshore drilling services at HRSM Offshore Services LLP. We offer efficient and safe drilling solutions in Mumbai and globally.' },
     
    ]);
  }
}

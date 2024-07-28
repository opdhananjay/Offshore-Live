import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';


@Component({
  selector: 'app-slider-home',
  templateUrl: './slider-home.component.html',
  styleUrls: ['./slider-home.component.css']
})
export class SliderHomeComponent implements OnInit {

   Company_Name = "HRSM Offshore Services LLP";


  constructor(
    private titleService: Title,
    private metaTagService: Meta
  ) { }

  ngOnInit() {
    this.titleService.setTitle("HRSM Offshore Services LLP - Premier Offshore Recruitment & Staffing Solutions in Mumbai, India");

    this.metaTagService.addTags([
      { name: 'description', content: 'HRSM Offshore Services LLP, based in Mumbai, India, offers premier offshore recruitment and staffing solutions. We specialize in permanent recruitment, contract staffing, and management services across renewables, oil and gas, marine, and construction sectors. Join us for top-tier talent acquisition and exceptional hiring processes.' },
      { name: 'keywords', content: 'HRSM Offshore Services LLP, offshore recruitment, staffing solutions, permanent recruitment, contract staffing, management services, hiring candidates, outsourcing, Mumbai, Maharashtra, India, talent acquisition, recruitment agency, offshore staffing, global recruitment, renewables, oil and gas, marine, construction' },
      { name: 'robots', content: 'index, follow' },
      { property: 'og:title', content: 'HRSM Offshore Services LLP - Premier Offshore Recruitment & Staffing Solutions in Mumbai, India' },
      { property: 'og:description', content: 'HRSM Offshore Services LLP, based in Mumbai, India, offers premier offshore recruitment and staffing solutions. We specialize in permanent recruitment, contract staffing, and management services across renewables, oil and gas, marine, and construction sectors. Join us for top-tier talent acquisition and exceptional hiring processes.' },
      { property: 'og:image', content: 'https://www.hrsmoffshore.com/assets/homepage.jpg' },
      { property: 'og:url', content: 'https://www.hrsmoffshore.com' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'HRSM Offshore Services LLP - Premier Offshore Recruitment & Staffing Solutions in Mumbai, India' },
      { name: 'twitter:description', content: 'HRSM Offshore Services LLP, based in Mumbai, India, offers premier offshore recruitment and staffing solutions. We specialize in permanent recruitment, contract staffing, and management services across renewables, oil and gas, marine, and construction sectors. Join us for top-tier talent acquisition and exceptional hiring processes.' },
      { name: 'twitter:image', content: 'https://www.hrsmoffshore.com/assets/homepage.jpg' }
    ]);


    const target = document.querySelector('.tw')

  }
}

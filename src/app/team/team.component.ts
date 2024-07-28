import { Component } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent {

  constructor(
    private titleService: Title,
    private metaTagService: Meta
  ) { }

  ngOnInit() {
    this.titleService.setTitle("Team HRSM Offshore Mumbai");

    this.metaTagService.addTags([
      { name: 'keywords', content: 'HRSM Offshore Services LLP, offshore recruitment, staffing solutions, hiring candidates, outsourcing, Mumbai, India, talent acquisition, recruitment agency, offshore staffing, global recruitment' },
      { name: 'robots', content: 'index, follow' },
    ]);
  }
}

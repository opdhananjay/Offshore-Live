import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-home1',
  templateUrl: './home1.component.html',
  styleUrls: ['./home1.component.css']
})
export class Home1Component implements OnInit {

  constructor(private elementRef: ElementRef) { }

  ngOnInit(): void {
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const content = this.elementRef.nativeElement.querySelector('#' + entry.target.id);
          content.classList.add('show');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    // Observe each content section separately
    for (let i = 1; i < 4; i++) {
      const sectionId = 'textContent' + i;
      const section = this.elementRef.nativeElement.querySelector('#' + sectionId);
      observer.observe(section);
    }
  }

}

import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-work-counter',
  templateUrl: './work-counter.component.html',
  styleUrls: ['./work-counter.component.css']
})
export class WorkCounterComponent implements AfterViewInit {

  @ViewChild('projectCounter') projectCounter!: ElementRef;
  @ViewChild('clientsCounter') clientsCounter!: ElementRef;
  @ViewChild('interactionCounter') interactionCounter!: ElementRef;
  @ViewChild('resourcesCounter') resourcesCounter!: ElementRef;

  constructor() { }

  ngAfterViewInit(): void {
    // Create Intersection Observer instance
    const options = {
      threshold: 0.2 // Define when the observer should trigger (20% of the element is visible)
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Trigger counter animation when section is in viewport
          this.animateCounter(this.projectCounter.nativeElement, 100);
          this.animateCounter(this.clientsCounter.nativeElement, 30);
          this.animateCounter(this.interactionCounter.nativeElement, 50);
          this.animateCounter(this.resourcesCounter.nativeElement, 30);
          observer.unobserve(entry.target); // Stop observing once animation is triggered
        }
      });
    }, options);

    // Start observing the section containing counters
    observer.observe(document.querySelector('.section-work-data')!);
  }

  // Function to animate counter
  animateCounter(element: HTMLElement, targetValue: number) {
    let currentValue = 0;
    const increment = Math.ceil(targetValue / 100); // Adjust animation speed here

    const interval = setInterval(() => {
      currentValue += increment;
      if (currentValue >= targetValue) {
        clearInterval(interval);
        currentValue = targetValue;
      }
      element.textContent = currentValue.toString();
    }, 100); // Adjust animation speed here (lower value -> faster animation)
  }

}

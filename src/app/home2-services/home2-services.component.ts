import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-home2-services',
  templateUrl: './home2-services.component.html',
  styleUrls: ['./home2-services.component.css']
})
export class Home2ServicesComponent implements AfterViewInit {
  @ViewChild('textContent') textContent!: ElementRef;
  @ViewChild('textContent1') textContent1!: ElementRef;
  @ViewChild('textContent2') textContent2!: ElementRef;
  @ViewChild('textContent3') textContent3!: ElementRef;
  @ViewChild('textContent4') textContent4!: ElementRef;
  @ViewChild('textContent5') textContent5!: ElementRef;
  @ViewChild('textContent6') textContent6!: ElementRef;

  constructor(private elementRef: ElementRef) {}

  ngAfterViewInit(): void {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('slide-in-left');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    observer.observe(this.textContent.nativeElement);
    observer.observe(this.textContent1.nativeElement);
    observer.observe(this.textContent2.nativeElement);
    observer.observe(this.textContent3.nativeElement);
    observer.observe(this.textContent4.nativeElement);
    observer.observe(this.textContent5.nativeElement);
    observer.observe(this.textContent6.nativeElement);

  }
}

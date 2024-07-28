import { Component } from '@angular/core';
import { elementAt } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  ngOnInit(): void {
    window.addEventListener('scroll', () => {
      const header: HTMLElement | null = document.getElementById('header');
      if (header) {
        if (window.scrollY > 0) {
          header.classList.add('header-white'); // Add white background class
        } else {
          header.classList.remove('header-white'); // Remove white background class
        }
      }
    });

    
  }
  


}

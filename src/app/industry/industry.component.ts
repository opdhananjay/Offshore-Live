import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-industry',
  templateUrl: './industry.component.html',
  styleUrls: ['./industry.component.css']
})
export class IndustryComponent implements OnInit {

ngOnInit(){
  var navItems = document.querySelectorAll('.nav-item');

  // Loop through each navigation item
  navItems.forEach(function(navItem) {
    // Add click event listener to each navigation item
    navItem.addEventListener('click', function() {
      // Remove 'active' class from all navigation items
      navItems.forEach(function(item) {
        item.classList.remove('active');
      });

      // Add 'active' class to the clicked navigation item
      navItem.classList.add('active');
    });
  });
}


}


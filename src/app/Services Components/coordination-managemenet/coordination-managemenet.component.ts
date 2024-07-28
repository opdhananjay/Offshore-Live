import { ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-coordination-managemenet',
  templateUrl: './coordination-managemenet.component.html',
  styleUrls: ['./coordination-managemenet.component.css']
})
export class CoordinationManagemenetComponent {

  constructor(private viewportScroller: ViewportScroller) {}

  onClick(elementId:string){
    this.viewportScroller.scrollToAnchor(elementId)
  }
  
  
}

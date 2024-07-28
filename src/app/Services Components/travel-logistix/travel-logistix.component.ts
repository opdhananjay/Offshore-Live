import { ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-travel-logistix',
  templateUrl: './travel-logistix.component.html',
  styleUrls: ['./travel-logistix.component.css']
})
export class TravelLogistixComponent {


  constructor(private viewportScroller: ViewportScroller) {}

  onClick(elementId:string){
    this.viewportScroller.scrollToAnchor(elementId)
  }
  

}

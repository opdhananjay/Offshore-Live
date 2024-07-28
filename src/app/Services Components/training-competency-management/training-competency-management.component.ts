import { ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-training-competency-management',
  templateUrl: './training-competency-management.component.html',
  styleUrls: ['./training-competency-management.component.css']
})
export class TrainingCompetencyManagementComponent {


  constructor(private viewportScroller: ViewportScroller) {}

  onClick(elementId:string){
    this.viewportScroller.scrollToAnchor(elementId)
  }
  

}

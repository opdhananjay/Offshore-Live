import { ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-contract-recruitment',
  templateUrl: './contract-recruitment.component.html',
  styleUrls: ['./contract-recruitment.component.css']
})
export class ContractRecruitmentComponent {

  constructor(private viewportScroller: ViewportScroller) {}

  onClick(elementId:string){
    this.viewportScroller.scrollToAnchor(elementId)
  }
}

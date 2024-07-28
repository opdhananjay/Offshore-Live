import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { Address } from 'ngx-google-places-autocomplete/objects/address';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent {
  public address!: Address;

  constructor(private location: Location) {}

  handleAddressChange(address: Address) {
    this.address = address;
    console.log(address);
  }
}

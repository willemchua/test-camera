import { Component, OnInit, AfterViewChecked, Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import * as _ from 'lodash';

import { HOSPITALS, CITIES } from '../const/location';
import { CoordinateService } from "../services/coordinate.service";

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css'],
  providers: [CoordinateService]
})
export class LocationComponent implements OnInit {

  private latitude: number;
  private longitude: number;
  private addresses: string[] = HOSPITALS;
  private cities: string[] = _.uniq(CITIES);
  private coordinates: [number, number][] = [];

  private currentCoordinate: [number, number];
  private currentAddress: string;

  private nearestAddress: string;
  private results: string;

  private currentLocation: boolean = false;
  private customLocation: boolean = false;

  constructor(private coordinateService: CoordinateService) { }

  ngOnInit() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition( (location) => {
        this.getAddress(location);
      })
    }
    this.getCoordinates();
  }
  
  getAddress(location: any) {
    this.setCurrentCoordinate(location);
    this.coordinateService.getAddress(this.latitude, this.longitude).subscribe((response: any) => {
      console.log(response);
      this.currentAddress = response.results[7].formatted_address;
    });
  }

  setCurrentCoordinate(location: any) {
    this.latitude = location.coords.latitude;
    this.longitude = location.coords.longitude;
    this.currentCoordinate = [this.latitude, this.longitude];
  }

  getCoordinates() {
    let index = 0;
    let interval;
    for(let address of this.addresses){
      this.sleep(200);
      let indexOfAddress = this.addresses.indexOf(address);

      this.coordinateService.getLatLng(address).subscribe((response: any) => {
        index++;
        if(response.status === "OK"){
          let latitude = response.results[0].geometry.location.lat;
          let longitude = response.results[0].geometry.location.lng;

          this.coordinates[indexOfAddress] = ([latitude, longitude]);
        }
        else if(response.status === "ZERO_RESULTS") {
          console.log('not on Google Maps');
        }
        else if(response.status === "OVER_QUERY_LIMIT") {
          console.log('you gotta be fucking kidding me');
        }
      });
    }
  }

  sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
      if ((new Date().getTime() - start) > milliseconds){
        break;
      }
    }
  }

  getNearest() {
    let distance = 100000000000000;
    let selectedIndex = -1;
    for(let i in this.coordinates){
      let dist = this.calculateDistance(this.coordinates[i][0], this.coordinates[i][1]
                      , this.currentCoordinate[0], this.currentCoordinate[1]);
      if (distance > dist) {
        distance = dist;
        selectedIndex = parseFloat(i);
      }
    }
    // console.log('Distance ' + distance);
    return selectedIndex;
  }

  calculateDistance(lat1, lon1, lat2, lon2) {
    let p = 0.017453292519943295;    // Math.PI / 180
    let a = 0.5 - Math.cos((lat2 - lat1) * p)/2 + 
            Math.cos(lat1 * p) * Math.cos(lat2 * p) * 
            (1 - Math.cos((lon2 - lon1) * p))/2;

    return 12742 * Math.asin(Math.sqrt(a)); // 2 * R; R = 6371 km
  }

  onCurrentLocation() {
    this.currentLocation = true;
    this.customLocation = false;

    let selectedIndex = this.getNearest();
    this.nearestAddress = this.addresses[selectedIndex];
  }

  onCustomLocation() {
    this.customLocation = true;
    this.currentLocation = false;
  }

  searchHospitals(selectedIndex) {
    this.results = 'Result for ' + this.cities[selectedIndex];
  }

}

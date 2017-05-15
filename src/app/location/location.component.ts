import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';

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
  private addresses: string[] = ['JL. IBRAHIM SINGADILAGA, NO.14'
                                , 'JL. ADITYAWARMAN I, NO.14, KEBAYORAN BARU'
                                , 'JL. CIKINI RAYA, NO.60 R/S'
                                , 'Jalan Letjen S. Parman No.72, RT.4/RW.3'];
  private coordinates: [string, string][] = [];
  private currentCoordinate: [number, number];
  private result: String;

  constructor(private coordinateService: CoordinateService) { }

  ngOnInit() {
    if ('geolocation' in navigator) {
     navigator.geolocation.getCurrentPosition( (location) => {
       this.addLocation(location);
     })
    }
    this.getCoordinates();
  }
  
  getCoordinates() {
    for(let address of this.addresses){
      let indexOfAddress = this.addresses.indexOf(address);

      this.coordinateService.getData(address).subscribe((response: any) => {
        let latitude = response.results[0].geometry.location.lat;
        let longitude = response.results[0].geometry.location.lng;

        this.coordinates[indexOfAddress] = ([latitude, longitude]);
      });
    }
  }

  getNearest() {
    let distance = 100000000000000;
    for(let i in this.coordinates){
      console.log(this.addresses[i]);
      let dist = this.calculateDistance(this.coordinates[i][0], this.coordinates[i][1]
                      , this.currentCoordinate[0], this.currentCoordinate[1]);
      console.log('Dist ' + dist);
      if (distance > dist) {
        distance = dist;
      }
    }
    console.log('Distance ' + distance);
    return distance;
  }

  calculateDistance(lat1, lon1, lat2, lon2) {
    let p = 0.017453292519943295;    // Math.PI / 180
    let a = 0.5 - Math.cos((lat2 - lat1) * p)/2 + 
            Math.cos(lat1 * p) * Math.cos(lat2 * p) * 
            (1 - Math.cos((lon2 - lon1) * p))/2;

    return 12742 * Math.asin(Math.sqrt(a)); // 2 * R; R = 6371 km
  }

  onClick() {
    let distance = this.getNearest();
    console.log(distance);
  }

  addLocation(location: any) {
    this.latitude = location.coords.latitude;
    this.longitude = location.coords.longitude;
    this.currentCoordinate = [this.latitude, this.longitude];
  }

}

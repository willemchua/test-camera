import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CoordinateService {

  private key = 'AIzaSyBiSEDunxLKO4zBisYX6Un2W1aF6VgXohs';

  constructor(private http:Http) { }

  getLatLng(address: string):Observable<Response>{
    return this.http.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${this.key}`)
        .map(res => {
        return res.json() || []});
  }

  getAddress(latitude: number, longitude: number) {
    return this.http.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${this.key}`)
        .map(res => {
          return res.json() || [] });
  }

}

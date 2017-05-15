import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CoordinateService {

  constructor(private http:Http) { }

  getData(address: String):Observable<Response>{
    return this.http.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=AIzaSyD9kX0_2Nu7G7AVQfE5JHThcqztz__KMRE`)
        .map(res => {
        return res.json() || []});
  }

}

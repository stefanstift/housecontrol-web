import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../environments/environment';
import {RoomLight} from './light.service';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  feeledTemp: number;
  temp: number;
  wind: number;

  constructor(private http: HttpClient) { }

  init() {
    this.callForValue(Measurement.FEELED_TEMP);
    this.callForValue(Measurement.TEMP);
    this.callForValue(Measurement.WIND);
  }

  getValue(measurement: Measurement) {
    switch (measurement) {
      case Measurement.FEELED_TEMP:
        return this.feeledTemp;
      case Measurement.TEMP:
        return this.temp;
      case Measurement.WIND:
        return this.wind;
    }
  }

  callForValue(measurement: Measurement) {
    return this.http.get(environment.backendurl + measurement).subscribe(x => {
      const state =  JSON.parse(x.toString());
      console.log('Received value ' + state + ' for measurement ' + measurement);
      switch (measurement) {
        case Measurement.FEELED_TEMP:
          this.feeledTemp = state;
          break;
        case Measurement.TEMP:
          this.temp = state;
          break;
        case Measurement.WIND:
          this.wind = state;
          break;
      }
    });
  }
}


export enum Measurement {
  FEELED_TEMP = 'mess/feeledtemp',
  TEMP = 'mess/temp',
  WIND = 'mess/windspeed'

}


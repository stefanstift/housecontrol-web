import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from './../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LightService {

  office: boolean;
  officeStefan: boolean;
  officeStephie: boolean;
  livingRoom: boolean;
  kitchenSpotsAll: boolean;
  kitchenSpotsFront: boolean;
  kitchenSpotsMiddle: boolean;
  ktichenSpotsBack: boolean;
  music: boolean;
  sleeping: boolean;
  eatingcorner: boolean;
  ogcorridor: boolean;

constructor(private http: HttpClient) { }

  init() {
    this.callForState(RoomLight.OFFICE_MAIN);
    this.callForState(RoomLight.OFFICE_STEFAN);
    this.callForState(RoomLight.OFFICE_STEPHIE);
    this.callForState(RoomLight.KITCHEN_EATING_CORNER);
    this.callForState(RoomLight.SLEEPING_MAIN);
    this.callForState(RoomLight.KITCHEN_SPOTS_ALL);
    this.callForState(RoomLight.KITCHEN_SPOTS_FRONT);
    this.callForState(RoomLight.KITCHEN_SPOTS_MIDDLE);
    this.callForState(RoomLight.KITCHEN_SPOTS_BACK);
    this.callForState(RoomLight.MUSIC_MAIN);
    this.callForState(RoomLight.LIVING_MAIN);
    this.callForState(RoomLight.OG_CORRIDOR);
  }

  switch(roomLight: RoomLight) {
    this.http.put(environment.backendurl + roomLight, {}).subscribe(x => {
      const state =  JSON.parse(x.toString());
      console.log('Received state after switch ' + state + ' for roomlight ' + roomLight);
      switch (roomLight) {
        case RoomLight.OFFICE_MAIN:
          this.office = state;
          break;
        case RoomLight.OFFICE_STEFAN:
          this.officeStefan = state;
          break;
        case RoomLight.OFFICE_STEPHIE:
          this.officeStephie = state;
          break;
        case RoomLight.LIVING_MAIN:
          this.livingRoom = state;
          break;
        case RoomLight.KITCHEN_SPOTS_ALL:
          this.kitchenSpotsAll = state;
          this.kitchenSpotsFront = state;
          this.kitchenSpotsMiddle = state;
          this.ktichenSpotsBack = state;
          break;
        case RoomLight.KITCHEN_SPOTS_FRONT:
          this.kitchenSpotsFront = state;
          break;
        case RoomLight.KITCHEN_SPOTS_MIDDLE:
          this.kitchenSpotsMiddle = state;
          break;
        case RoomLight.KITCHEN_SPOTS_BACK:
          this.ktichenSpotsBack = state;
          break;
        case RoomLight.KITCHEN_EATING_CORNER:
          this.eatingcorner = state;
          break;
        case RoomLight.MUSIC_MAIN:
          this.music = state;
          break;
        case RoomLight.OG_CORRIDOR:
          this.ogcorridor = state;
          break;
        case RoomLight.SLEEPING_MAIN:
          this.sleeping = state;
          break;
        case RoomLight.ALL_OFF:
          break;
        case RoomLight.OG_OFF:
          break;
        case RoomLight.EG_OFF:
          break;
      }
    });
  }

  off(roomLight: RoomLight) {
    this.http.put(environment.backendurl + roomLight, {}).subscribe(x => {

    });
  }



  getState(roomLight: RoomLight) {
   console.log('Get state for roomlight ' + roomLight);
   switch (roomLight) {
     case RoomLight.OFFICE_STEPHIE:
       return this.officeStephie;
     case RoomLight.OG_CORRIDOR:
       return this.ogcorridor;
     case RoomLight.OFFICE_STEFAN:
       return this.officeStefan;
     case RoomLight.LIVING_MAIN:
       return this.livingRoom;
     case RoomLight.KITCHEN_SPOTS_ALL:
       return this.kitchenSpotsAll;
     case RoomLight.KITCHEN_SPOTS_FRONT:
       return this.kitchenSpotsFront;
     case RoomLight.KITCHEN_SPOTS_MIDDLE:
       return this.kitchenSpotsMiddle;
     case RoomLight.KITCHEN_SPOTS_BACK:
       return this.ktichenSpotsBack;
     case RoomLight.MUSIC_MAIN:
       return this.music;
     case RoomLight.SLEEPING_MAIN:
       return this.sleeping;
     case RoomLight.ALL_OFF:
       break;
     case RoomLight.OG_OFF:
       break;
     case RoomLight.EG_OFF:
       break;
     case RoomLight.OFFICE_MAIN:
       return this.office;
     case RoomLight.KITCHEN_EATING_CORNER:
       return this.eatingcorner;
   }
  }


  callForState(roomLight: RoomLight) {
    return this.http.get(environment.backendurl + roomLight).subscribe(x => {
      const state =  JSON.parse(x.toString());
      console.log('Received state ' + state + ' for roomlight ' + roomLight);
      switch (roomLight) {
        case RoomLight.OFFICE_MAIN:
          this.office = state;
          break;
        case RoomLight.OFFICE_STEFAN:
          this.officeStefan = state;
          break;
        case RoomLight.OFFICE_STEPHIE:
          this.officeStephie = state;
          break;
        case RoomLight.LIVING_MAIN:
          this.livingRoom = state;
          break;
        case RoomLight.KITCHEN_SPOTS_ALL:
          this.kitchenSpotsAll = state;
          this.kitchenSpotsAll = state;
          this.kitchenSpotsFront = state;
          this.kitchenSpotsMiddle = state;
          this.ktichenSpotsBack = state;
          break;
        case RoomLight.KITCHEN_SPOTS_FRONT:
          this.kitchenSpotsFront = state;
          break;
        case RoomLight.KITCHEN_SPOTS_MIDDLE:
          this.kitchenSpotsMiddle = state;
          break;
        case RoomLight.KITCHEN_SPOTS_BACK:
          this.ktichenSpotsBack = state;
          break;
        case RoomLight.KITCHEN_EATING_CORNER:
          this.eatingcorner = state;
          break;
        case RoomLight.MUSIC_MAIN:
          this.music = state;
          break;
        case RoomLight.OG_CORRIDOR:
          this.ogcorridor = state;
          break;
        case RoomLight.SLEEPING_MAIN:
          this.sleeping = state;
          break;
        case RoomLight.ALL_OFF:
          break;
        case RoomLight.OG_OFF:
          break;
        case RoomLight.EG_OFF:
          break;
      }
    });
  }
}


export enum RoomLight {
  OFFICE_MAIN = 'room/office/light/main',
  OFFICE_STEFAN = 'room/office/plug/stefan',
  OFFICE_STEPHIE = 'room/office/plug/stephie',
  LIVING_MAIN = 'room/living/light/main',

  KITCHEN_SPOTS_ALL = 'room/kitchen/light/spots/all',
  KITCHEN_SPOTS_FRONT = 'room/kitchen/light/spots/front',
  KITCHEN_SPOTS_MIDDLE = 'room/kitchen/light/spots/middle',
  KITCHEN_SPOTS_BACK = 'room/kitchen/light/spots/back',
  KITCHEN_EATING_CORNER = 'room/kitchen/light/eatingcorner',

  MUSIC_MAIN = 'room/music/light/main',

  OG_CORRIDOR = 'room/ogcorridor/light/main',

  SLEEPING_MAIN = 'room/sleeping/light/main',

  ALL_OFF = 'floor/all/light/off',

  OG_OFF = 'floor/first/light/all/off',
  EG_OFF = 'floor/ground/light/all/off'

}


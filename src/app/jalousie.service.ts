import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class JalousieService {

  constructor(private http: HttpClient) { }

  init() {
  }

  open(roomJal: RoomJalousie) {
    this.http.put(environment.backendurl + roomJal + 'open', {}).subscribe(x => {
    });
  }

  close(roomJal: RoomJalousie) {
    this.http.put(environment.backendurl + roomJal + 'close', {}).subscribe(x => {
    });
  }

}


export enum RoomJalousie {
  OFFICE = 'room/office/jalousie/main/',

  LIVING_ROOM_DOOR = 'room/living/jalousie/door/',
  LIVING_ROOM_MAIN = 'room/living/jalousie/main/',

  KITCHEN_ALL = 'room/kitchen/jalousie/all/',
  KITCHEN_134 = 'room/kitchen/jalousie/134/',

  MUSIC = 'room/music/jalousie/main/',

  SLEEPING_MAIN = 'room/sleeping/jalousie/main/',
  SLEEPING_SIDE = 'room/sleeping/jalousie/side/',

  ALL_FIRST_FLOOR = 'floor/first/jalousie/',
  ALL_GROUND_FLOOR = 'floor/ground/jalousie/',

  ALL = 'floor/all/jalousie/'

}

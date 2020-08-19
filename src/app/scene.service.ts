import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SceneService {

  constructor(private http: HttpClient) { }

  activate(scene: Scene) {
    this.http.put(environment.backendurl + scene, {}).subscribe(x => {
    });
  }
}


export enum Scene {
  GOOD_NIGHT = 'scene/goodnight',
  GOOD_MORNING = 'scene/goodmorning',
  LEAVE = 'scene/leave',
  HOME = 'scene/home',
  CINEMA = 'scene/cinema'
}

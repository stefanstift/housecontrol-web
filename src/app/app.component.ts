import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {LightService, RoomLight} from './light.service';
import {JalousieService, RoomJalousie} from './jalousie.service';
import {Scene, SceneService} from './scene.service';
import {DashboardService, Measurement} from './dashboard.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'housecontrolweb';
  roomLightEnum = RoomLight;
  roomJalousieEnum = RoomJalousie;
  sceneEnum =  Scene;
  measurementEnum = Measurement;

  constructor(private http: HttpClient, private lightService: LightService, private jalousieService: JalousieService, private sceneService: SceneService, private dashboardService: DashboardService) { }

  ngOnInit() {
    this.lightService.init();
    this.dashboardService.init();
  }

  lightState(roomLight: RoomLight) {
      if (this.lightService.getState(roomLight) === true) {
        return 'highlight_off';
      } else {
        return 'highlight';
      }
  }

  switchLight(roomLight: RoomLight) {
    console.log('sending put to path ' + roomLight);
    this.lightService.switch(roomLight);
  }

  enableScene(scene: Scene) {
    console.log('sending put to path ' + scene);
    this.sceneService.activate(scene);
  }

  getValue(measurement: Measurement) {
    return this.dashboardService.getValue(measurement);
  }

  refresh() {
    this.dashboardService.init();
  }

  off(roomLight: RoomLight) {
    console.log('sending put to path ' + roomLight);
    this.lightService.off(roomLight);
  }

  jalousieUp(roomJalousie: RoomJalousie) {
    console.log('sending jalousie up to path ' + roomJalousie);
    this.jalousieService.open(roomJalousie);
  }

  jalousieDown(roomJalousie: RoomJalousie) {
    console.log('sending jalousie down to path ' + roomJalousie);
    this.jalousieService.close(roomJalousie);
  }

}

import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable, Subscriber} from 'rxjs';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  lightOfficeMain: boolean;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.lightOfficeMain = false;
    this.lightstate('/room/office/light/main');
  }

  lightstate(path: string) {
    this.http.get('http://192.168.9.138:8080/api' + path).subscribe(x => {
      console.log(x);
      this.lightOfficeMain = JSON.parse(x.toString());
    });
  }

  switch(path: string) {
     console.log('sending put to path ' + path);
     this.http.put('http://192.168.9.138:8080/api' + path, {})._subscribe(new Subscriber<any>());
     this.lightOfficeMain = !this.lightOfficeMain;
  }

  getIcon() {
    if (this.lightOfficeMain === true) {
      return 'highlight_off';
    } else {
      return 'highlight';
    }
  }

}

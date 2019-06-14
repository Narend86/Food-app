import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  
  // sidenavbar open
  public appDrawer: any;
  constructor(private http: HttpClient) { }

sendJson() {
  return this.http.get('../assets/food-json/food.json');
}

  public toggleNav() {
    this.appDrawer.toggle();
  }

  public openNav() {
    this.appDrawer.open();
  }
}

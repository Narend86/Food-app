import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  
  // sidenavbar open
  public appDrawer: any;
  constructor(private http: HttpClient) { }

sendJson():Observable<any> {
  return this.http.get('../assets/food-json/food.json');
}

  public toggleNav() {
    this.appDrawer.toggle();
  }

  public openNav() {
    this.appDrawer.open();
  }
}

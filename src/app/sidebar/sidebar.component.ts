import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, OnDestroy } from '@angular/core';
import { AppService } from '../app.service';
import { MediaMatcher } from '@angular/cdk/layout';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit, AfterViewInit, OnDestroy {
  matcher: MediaQueryList;
  match;
  @ViewChild('appDrawer') appDrawer: ElementRef;
  
  constructor(private appService:AppService,public mediaMatcher: MediaMatcher) { }

  ngOnInit() {
    this.matcher = this.mediaMatcher.matchMedia('(max-width: 768px)');
    // this.matcher.addListener(this.myListener);
    
    this.match = this.matcher.matches
    
  }
  ngAfterViewInit() {
    this.appService.appDrawer = this.appDrawer;
  }
  ngOnDestroy() {
    // this.matcher.removeListener(this.myListener);
  }
  // myListener(event) {
  //   console.log(event)
  //   console.log(event.matches ? 'match' : 'no match');
  // }
}

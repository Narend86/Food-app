import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  constructor(public appService: AppService) { }

  ngOnInit() {
    this.appService.sendJson().subscribe(x=>console.log(x))
  }

}

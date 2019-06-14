import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  constructor(public appService: AppService) { }
  allData;
  date = new Date();
  ngOnInit() {
    this.appService.sendJson().subscribe(data=>{
      console.log(data.response)
      this.allData = data.response;
      console.log(this.allData)
    });
  }

}

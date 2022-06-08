import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { QueueListObject } from "../data.service";

@Component({
  selector: 'app-dj-view',
  templateUrl: './dj-view.component.html',
  styleUrls: ['./dj-view.component.scss']
})
export class DjViewComponent implements OnInit {

  cards: Array<QueueListObject> = [];
  timeout: any = null;


  constructor(public servicemusic: DataService) { }

  ngOnInit(): void {

    this.getWunschliste();

    setInterval(() => {         
      //replaced function() by ()=>
      this.getWunschliste();
      // just testing if it is working
    }, 180000);

    
  }


  getWunschliste(){

    this.servicemusic.listQueueList.length = 0;
    this.cards.length = 0;
    this.cards = this.servicemusic.getVeranstaltung();
    console.log(this.cards);

}
}

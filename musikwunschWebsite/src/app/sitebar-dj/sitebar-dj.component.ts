import { Component, Input, OnInit } from '@angular/core';
import { DataService, QueueListObject } from '../data.service';

@Component({
  selector: 'app-sitebar-dj',
  templateUrl: './sitebar-dj.component.html',
  styleUrls: ['./sitebar-dj.component.scss']
})
export class SitebarDjComponent implements OnInit {

  oldcards: Array<QueueListObject> = [];
  timeout: any = null;
  constructor(public servicemusic: DataService) { }

  ngOnInit(): void {

    this.getSongsGespielt();

    setInterval(() => {         
      //replaced function() by ()=>
      this.getSongsGespielt();
      // just testing if it is working
    }, 180000);
  }

  @Input() oldtitel: string ='';
  @Input() oldinterpret: string ='';
  @Input() oldvotes: number = 0;
  @Input() oldimg: string ='';
  
  getSongsGespielt(){

    this.servicemusic.listAlreadyPlayedSongs.length=0;
    this.oldcards.length = 0;
    this.oldcards = this.servicemusic.getSong_gespielt();
    console.log(this.oldcards);

}


}

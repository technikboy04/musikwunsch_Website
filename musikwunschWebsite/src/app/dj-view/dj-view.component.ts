import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';



@Component({
  selector: 'app-dj-view',
  templateUrl: './dj-view.component.html',
  styleUrls: ['./dj-view.component.scss']
})
export class DjViewComponent implements OnInit {

  constructor(public servicemusic: DataService) { }

  ngOnInit(): void {

    this.servicemusic.getSpotifySearchResults('Shut up and Dance');
    this.servicemusic.setSong_gespielt(24);
  }

  musikliste: any[] = [
    {
      title: 'Testen',
      interpret: 'Tom',
      votes: '12',
      timestamp: '12:33'
    },
    {
      title: 'Testen2',
      interpret: 'Jan',
      votes: '30',
      timestamp: '1:33'
    }
  ];

 

}

import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';



@Component({
  selector: 'app-dj-view',
  templateUrl: './dj-view.component.html',
  styleUrls: ['./dj-view.component.scss']
})
export class DjViewComponent implements OnInit {

  constructor(private Service:DataService) { }

  ngOnInit(): void {

    console.log(this.Service.getSpotifySearchResults('Shut up and Dance'));
    
  }

  
  musikliste:any[] = [
    {
      title: 'Testen',
      interpret: 'Tom',
      votes:'12',
      timestamp:'12:33'
    },
    {
      title: 'Testen2',
      interpret: 'Jan',
      votes:'30',
      timestamp:'1:33'
    }
  ];

  cards:any[] = [
    {
      title: 'Levitate',
      singer: 'Bleed from Within',
      votes: '13',
      img: 'https://i.scdn.co/image/ab67616d0000b27383dd0216e36aa016e20c39b7'
    },
    {
      title: 'Stitches',
      singer: 'Bullet for my Valentine',
      votes: '11',
      img: 'https://i.scdn.co/image/ab67616d0000b27383dd0216e36aa016e20c39b7'
    },
    {
      title: 'Butter',
      singer: 'BTS',
      votes: '2',
      img: 'https://i.scdn.co/image/ab67616d0000b27383dd0216e36aa016e20c39b7'
    },
    {
      title: 'Peaches',
      singer: 'Justin Bieber',
      votes: '1',
      img: 'https://i.scdn.co/image/ab67616d0000b27383dd0216e36aa016e20c39b7'
    },
    {
      title: 'Stitches',
      singer: 'Bullet for my Valentine',
      votes: '11',
      img: 'https://i.scdn.co/image/ab67616d0000b27383dd0216e36aa016e20c39b7'
    },
    {
      title: 'Butter',
      singer: 'BTS',
      votes: '2',
      img: 'https://i.scdn.co/image/ab67616d0000b27383dd0216e36aa016e20c39b7'
    },
    {
      title: 'Peaches',
      singer: 'Justin Bieber',
      votes: '1',
      img: 'https://i.scdn.co/image/ab67616d0000b27383dd0216e36aa016e20c39b7'
    },

  ];

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dj-view',
  templateUrl: './dj-view.component.html',
  styleUrls: ['./dj-view.component.scss']
})
export class DjViewComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
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

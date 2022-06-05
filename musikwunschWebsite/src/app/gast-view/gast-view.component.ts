import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gast-view',
  templateUrl: './gast-view.component.html',
  styleUrls: ['./gast-view.component.scss']
})
export class GastViewComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  cards:any[] = [
    {
      title: 'Levitate',
      singer: 'Bleed from Within',
      votes: '13',
      time: '12.55',
      img: 'https://i.scdn.co/image/ab67616d0000b27383dd0216e36aa016e20c39b7'
    },
    {
      title: 'Stitches',
      singer: 'Bullet for my Valentine',
      votes: '11',
      time: '12.55',
      img: 'https://i.scdn.co/image/ab67616d0000b27383dd0216e36aa016e20c39b7'
    },
    {
      title: 'Butter',
      singer: 'BTS',
      votes: '2',
      time: '12.55',
      img: 'https://i.scdn.co/image/ab67616d0000b27383dd0216e36aa016e20c39b7'
    },
    {
      title: 'Peaches',
      singer: 'Justin Bieber',
      votes: '1',
      time: '12.55',
      img: 'https://i.scdn.co/image/ab67616d0000b27383dd0216e36aa016e20c39b7'
    },
    {
      title: 'Levitate',
      singer: 'Bleed from Within',
      votes: '13',
      time: '12.55',
      img: 'https://i.scdn.co/image/ab67616d0000b27383dd0216e36aa016e20c39b7'
    },
    {
      title: 'Stitches',
      singer: 'Bullet for my Valentine',
      votes: '11',
      time: '12.55',
      img: 'https://i.scdn.co/image/ab67616d0000b27383dd0216e36aa016e20c39b7'
    },
    {
      title: 'Butter',
      singer: 'BTS',
      time: '12.55',
      votes: '2',
      img: 'https://i.scdn.co/image/ab67616d0000b27383dd0216e36aa016e20c39b7'
    },
    {
      title: 'Peaches',
      singer: 'Justin Bieber',
      votes: '1',
      time: '12.55',
      img: 'https://i.scdn.co/image/ab67616d0000b27383dd0216e36aa016e20c39b7'
    },

  ];
}

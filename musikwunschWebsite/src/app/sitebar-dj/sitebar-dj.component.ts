import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sitebar-dj',
  templateUrl: './sitebar-dj.component.html',
  styleUrls: ['./sitebar-dj.component.scss']
})
export class SitebarDjComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() oldtitel: string ='';
  @Input() oldinterpret: string ='';
  @Input() oldimg: string ='';
  @Input() oldvotes: string ='';
  oldcards:any[] = [
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

  ];
}

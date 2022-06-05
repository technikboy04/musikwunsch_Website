import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-music-card-user',
  templateUrl: './music-card-user.component.html',
  styleUrls: ['./music-card-user.component.scss']
})
export class MusicCardUserComponent implements OnInit {

  constructor() { }
  @Input() titel: string ='';
  @Input() interpret: string ='';
  @Input() bild: string ='';
  @Input() votes: string ='';
  @Input() time: string ='';
  ngOnInit(): void {
  }

}

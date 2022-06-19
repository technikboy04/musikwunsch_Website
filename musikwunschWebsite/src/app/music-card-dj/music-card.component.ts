import { Component,Input, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-music-card',
  templateUrl: './music-card.component.html',
  styleUrls: ['./music-card.component.scss']
})
export class MusicCardComponent implements OnInit {

  @Input() song_id: number = 0;
  @Input() titel: string ='';
  @Input() interpret: string ='';
  @Input() votes: number =0;
  @Input() bild: string ='';
  @Input() time: string ='';
  @Input() artistID: string ='';

  constructor(public servicemusic: DataService, public router: Router) { }

  ngOnInit(): void {
  }


  deleteSongFromList(id: number){
    this.servicemusic.deleteSong(id);


    let currentUrl = this.router.url;
    setTimeout(() => {
     
   
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
        this.router.navigate([currentUrl]);
    });
  }, 300);
  }


  setSongAlsGespielt(id: number){
    this.servicemusic.setSong_gespielt(id);
    let currentUrl = this.router.url;
    setTimeout(() => {
     
   
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
        this.router.navigate([currentUrl]);
    });
  }, 300);
  }

}

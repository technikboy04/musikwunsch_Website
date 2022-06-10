import { Component,Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-music-card-user',
  templateUrl: './music-card-user.component.html',
  styleUrls: ['./music-card-user.component.scss']
})
export class MusicCardUserComponent implements OnInit {

  constructor(public servicemusic: DataService, public router: Router) { }

  @Input() song_id: number = 0;
  @Input() titel: string ='';
  @Input() interpret: string ='';
  @Input() votes: number =0;
  @Input() bild: string ='';

  ngOnInit(): void {
    
  }

  changeVoteFromSong(id: number){
    console.log("test");
    this.servicemusic.getVoteup(id);

    let currentUrl = this.router.url;

    setTimeout(() => {
     
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
        this.router.navigate([currentUrl]);
    });
  }, 300);
  }

  

}

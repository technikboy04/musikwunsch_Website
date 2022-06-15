import { Component,Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-music-card-user',
  templateUrl: './music-card-user.component.html',
  styleUrls: ['./music-card-user.component.scss']
})
export class MusicCardUserComponent implements OnInit {
  statuscookie: number = 0;
  constructor(public servicemusic: DataService, public router: Router) { }

  @Input() song_id: number = 0;
  @Input() titel: string ='';
  @Input() interpret: string ='';
  @Input() votes: number =0;
  @Input() bild: string ='';

  ngOnInit(): void {
    
  }

 setCookie(name: string,value: string) {
  sessionStorage.setItem(name, value);
}

getCookie (song_id: string): string|null {
    
 return sessionStorage.getItem(song_id);
}

deletecookie(name: string){
  sessionStorage.removeItem(name);
  
}
 
  changeVoteFromSong(id: number){
  
    if(this.getCookie(id.toString()) == null){
      this.setCookie(id.toString(), "1");
      this.servicemusic.getVoteup(id);
     
      setTimeout(() => {
        window.location.reload();
      }, 700); // Activate after 5 minutes.
    }

    else if(this.getCookie(id.toString()) == "1"){
      this.servicemusic.getVoteDown(id);
      this.deletecookie(id.toString());
      setTimeout(() => {
        window.location.reload();
      }, 700); // Activate after 5 minutes.
    }
  }
}

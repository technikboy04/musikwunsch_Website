import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Spotify } from "../data.service";


@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
  data: Array<Spotify> = [];
  timeout: any = null;
  constructor(public servicemusic: DataService) { }

  ngOnInit(): void {
    
  }

  selectSongfromSearchBar(item: Spotify){
    this.servicemusic.postAddSongToList(item.song_name, item.artist, item.url);
    this.data.length = 0;
    
    setTimeout(() => {
      window.location.reload();
    }, 50); // Activate after 5 minutes.

  }

  

  searchbarUsedbyUser(event: any) {
    
    clearTimeout(this.timeout);
    var $this = this;
    this.timeout = setTimeout(function () {
      if (event.keyCode != 13) {
        $this.makeSpotifyApiCall(event.target.value);
      }
    }, 300);
  }

  

  makeSpotifyApiCall(name: any){

    const keyword = name;
    if(keyword != ""){
    console.log(keyword);
    this.servicemusic.listSpotifySearchBar.length = 0;
    this.data.length = 0;
    this.data = (this.servicemusic.getSpotifySearchResults(keyword));
    console.log(this.data);

  }else{
    this.data.length = 0;
  }
}

  
}






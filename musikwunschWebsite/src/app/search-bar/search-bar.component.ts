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

  

  onKeySearch(event: any) {
    
    clearTimeout(this.timeout);
    var $this = this;
    this.timeout = setTimeout(function () {
      if (event.keyCode != 13) {
        $this.getProductSearch(event.target.value);
      }
    }, 300);
  }

  getProductSearch(name: any){

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



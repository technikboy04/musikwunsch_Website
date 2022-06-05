import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  url: string;

  constructor(private httpClient:HttpClient) { 
    this.url = "http://atiw.jundk-hosting.de:3000";
  }

  public getVeranstaltung(){
    let endPoints="/veranstaltung"
      this.httpClient.get(this.url+endPoints).subscribe(data => {
      console.log(data);
    });
  }

  public getSong_gespielt(){
    let endPoints="/song_gespielt"
      this.httpClient.get(this.url+endPoints).subscribe(data => {
      console.log(data);
    });
  }



  public getVeranstaltungByID(id: number) {
    
    let endPoints = "/veranstaltung/" + id;
    this.httpClient.get(this.url + endPoints).subscribe(data => {
      console.log(data);
    });
  }
  
  public deleteSong(id: number) {
    let endPoints = "/veranstaltung/" + id;
    this.httpClient.delete(this.url + endPoints).subscribe(data => {
      console.log(data);
    });
  }

  public getSpotifySearchResults(searchString: String){
    let endPoints="/spotify:" + searchString;
      this.httpClient.get(this.url+endPoints).subscribe(data => {
     console.log(data);
    });
  }


  
}

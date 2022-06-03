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

  public getPosts(){
    let endPoints="/veranstaltung"
      this.httpClient.get(this.url+endPoints).subscribe(data => {
      console.log(data);
    });
  }
}

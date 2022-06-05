import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  url: string;

  listSpotifySearchBar: Array<Spotify> = [];
  listQueueList: Array<QueueListObject> = [];
  listAlreadyPlayedSongs: Array<QueueListObject> = [];

  constructor(private httpClient: HttpClient) {
    this.url = "http://atiw.jundk-hosting.de:3000";
  }

  public getVeranstaltung() {
    let endPoints = "/veranstaltung"
    this.httpClient.get<ListSongQueue>(this.url + endPoints).subscribe(data => {

      for (let i = 0; i < data.response.length; i++) {
        let newListQueueObject = new QueueListObject(
          data.response[i].song_id,
          data.response[i].song_name,
          data.response[i].interpret,
          data.response[i].timestamp,
          data.response[i].votinganzahl,
          data.response[i].song_gespielt,
          data.response[i].url
        );
        this.listQueueList.push(newListQueueObject);
      }
     
    });
  }

  public getVeranstaltungByID(id: number) {

    let endPoints = "/veranstaltung/" + id;
    this.httpClient.get(this.url + endPoints).subscribe(data => {
      console.log(data);
    });
  }

  public getVoteup(id: number) {
    let endPoints = "/veranstaltung/voteup/" + id;
    this.httpClient.get(this.url + endPoints).subscribe(data => {
      console.log(data);
    });
  }

  public setSong_gespielt(id: number) {
    let endPoints = "/veranstaltung/gespielt/" + id;
    this.httpClient.get(this.url + endPoints).subscribe(data => {
      console.log(data);
    });
  }


  public getSong_gespielt() {
    let endPoints = "/song_gespielt"
    this.httpClient.get<ListSongQueue>(this.url + endPoints).subscribe(data => {

      for (let i = 0; i < data.response.length; i++) {
        let newListAlreadyPlayedObject = new QueueListObject(
          data.response[i].song_id,
          data.response[i].song_name,
          data.response[i].interpret,
          data.response[i].timestamp,
          data.response[i].votinganzahl,
          data.response[i].song_gespielt,
          data.response[i].url
        );
        this.listAlreadyPlayedSongs.push(newListAlreadyPlayedObject);
      }
      console.log(this.listAlreadyPlayedSongs);
    });
  }

  public deleteSong(id: number) {
    let endPoints = "/veranstaltung/" + id;
    this.httpClient.delete(this.url + endPoints).subscribe(data => {
      console.log(data);
    });
  }

  

  public getSpotifySearchResults(searchString: String) {

    let endPoints = "/spotify:" + searchString;
    this.httpClient.get<SearchResultsSpotify>(this.url + endPoints).subscribe(data => {
      console.log(data.response[0].artists[0].name);
      

      for (let i = 0; i < data.response.length; i++) {
        let newSpotifyobject = new Spotify(data.response[i].name, data.response[i].artists[0].name, data.response[i].album.images[0].url);
        this.listSpotifySearchBar.push(newSpotifyobject);
      }
      console.log(this.listSpotifySearchBar);
    });
  }
}

export class Spotify {

  song_name: String = "";
  artist: String = "";
  url: String = "";
  constructor(song_name: String, artist: String, url: String) {
    this.song_name = song_name;
    this.artist = artist;
    this.url = url;
  }
}

export class QueueListObject {
  song_id: number = 0;
  song_name: String = "";
  interpret: String = "";
  timestamp: String = "";
  votinganzahl: number = 0;
  song_gespielt: number = 0;
  url: String = "";

  constructor(song_id: number, song_name: String, interpret: String, timestamp: String, votinganzahl: number, song_gespielt: number, url: String) {
    this.song_id = song_id;
    this.song_name = song_name;
    this.interpret = interpret;
    this.timestamp = timestamp;
    this.votinganzahl = votinganzahl;
    this.song_gespielt = song_gespielt;
    this.url = url;
  }
}

interface SearchResultsSpotify {
  response: Array<item>;
}

interface ListSongQueue {
  response: Array<ListSongQueueItems>;
}

interface ListSongQueueItems {
  song_id: number;
  song_name: String;
  interpret: String;
  timestamp: String;
  votinganzahl: number;
  song_gespielt: number;
  url: String;
}

interface item {
  album: album;
  artists: Array<Artists>;
  name: String;

}

interface album {
  images: Array<Images>;
}

interface Images {
  url: String;
}

interface Artists {
  name: String;
}



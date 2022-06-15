import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  postId: any;
  url: string;

  listSpotifySearchBar: Array<Spotify> = [];
  listQueueList: Array<QueueListObject> = [];
  listAlreadyPlayedSongs: Array<QueueListObject> = [];

  constructor(private httpClient: HttpClient) {
    this.url = "http://atiw.jundk-hosting.de:3000";
  }

  public postAddSongToList(song_name: string, interpret: string, bild_url: string){
    this.httpClient.post<any>('http://atiw.jundk-hosting.de:3000/veranstaltung/addSong', { 
      song_name: song_name, interpret: interpret, votinganzahl: 1, song_gespielt: 0, bild_url: bild_url }).subscribe(data => {
        this.postId = data.id;
    })
  }



  public getVeranstaltung(): Array<QueueListObject> {
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
          data.response[i].bild_url
        );
        
        this.listQueueList.push(newListQueueObject);
      }
     
    });

    return this.listQueueList;
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
    });
  }


  public getVoteDown(id: number) {
    let endPoints = "/veranstaltung/votedown/" + id;
    this.httpClient.get(this.url + endPoints).subscribe(data => {
    });
  }

  public setSong_gespielt(id: number) {
    let endPoints = "/veranstaltung/gespielt/" + id;
    
    this.httpClient.get(this.url + endPoints, {}).subscribe(data => {
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
          data.response[i].bild_url
        );
        this.listAlreadyPlayedSongs.push(newListAlreadyPlayedObject);
      }
      console.log(this.listAlreadyPlayedSongs);
      
    });
    return this.listAlreadyPlayedSongs;
  }

  public deleteSong(id: number) {
    let endPoints = "/veranstaltung/" + id;
    this.httpClient.delete(this.url + endPoints).subscribe(data => {
      console.log(data);
    });
  }

  

  public getSpotifySearchResults(searchString: String): Array<Spotify> {

    let endPoints = "/spotify:" + searchString;
    this.httpClient.get<SearchResultsSpotify>(this.url + endPoints).subscribe(data => {
      
      

      for (let i = 0; i < data.response.length; i++) {
        let newSpotifyobject = new Spotify(data.response[i].name, data.response[i].artists[0].name, data.response[i].album.images[0].url);
        this.listSpotifySearchBar.push(newSpotifyobject);
      }
      
      
      
      
    });
    return this.listSpotifySearchBar;
  }
}

export class Spotify {

  song_name: string = "";
  artist: string = "";
  url: string = "";
  constructor(song_name: string, artist: string, url: string) {
    this.song_name = song_name;
    this.artist = artist;
    this.url = url;
  }
}

export class QueueListObject {
  song_id: number = 0;
  song_name: string = "";
  interpret: string = "";
  timestamp: string = "";
  votinganzahl: number = 0;
  song_gespielt: number = 0;
  bild_url: string = "";

  constructor(song_id: number, song_name: string, interpret: string, timestamp: string, votinganzahl: number, song_gespielt: number, url: string) {
    this.song_id = song_id;
    this.song_name = song_name;
    this.interpret = interpret;
    this.timestamp = timestamp;
    this.votinganzahl = votinganzahl;
    this.song_gespielt = song_gespielt;
    this.bild_url = url;
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
  song_name: string;
  interpret: string;
  timestamp: string;
  votinganzahl: number;
  song_gespielt: number;
  bild_url: string;
}

interface item {
  album: album;
  artists: Array<Artists>;
  name: string;

}

interface album {
  images: Array<Images>;
}

interface Images {
  url: string;
}

interface Artists {
  name: string;
}


@Injectable({ providedIn: 'root' })
export class CommonService {
    private subjectName = new Subject<any>(); //need to create a subject

    sendUpdate(message: string) { //the component that wants to update something, calls this fn
        this.subjectName.next({ text: message }); //next() will feed the value in Subject
    }

    getUpdate(): Observable<any> { //the receiver component calls this function 
        return this.subjectName.asObservable(); //it returns as an observable to which the receiver funtion will subscribe
    }
}
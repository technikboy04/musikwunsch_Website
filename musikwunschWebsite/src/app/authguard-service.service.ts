import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthguardServiceService {

  constructor(private router: Router) { }

  checkRouteActive(): boolean{  
    this.router.navigate(['/dj-view'])
    .then(data => {
      return true;
    })
    .catch(e => {
      return false;
    });
    return false;
    }  
   


}

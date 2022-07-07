import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {
  
  
  canActivate(): boolean{
    
    var key = sessionStorage.getItem("sessionID");
    if(key == "WkdvPT8/P2RHb3RiWFZ6YVdNPQ=="){

    return true;
    }
    else{
      return false;
    }
  }
  
}

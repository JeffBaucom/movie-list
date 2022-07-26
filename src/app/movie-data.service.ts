import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieDataService {

  constructor(private httpClient: HttpClient) { }

  getMovies(): Observable<Object>{
    
    return this.httpClient
      .get('assets/data.json');
  }
}

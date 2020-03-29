import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, Subject } from 'rxjs';
import { Coord } from './weather/weather-object';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  isLoading$: Subject<boolean> = new Subject();

  constructor(private httpClient: HttpClient) {
    this.isLoading$.next(false);
   }

  apiGet<T>(location: Coord, uri): Observable<T>{
    this.isLoading$.next(true);

    const url = `${environment.baseWeatherUrl}/${uri}?lat=${location.lat}&lon=${location.lon}&appid=${environment.apiKey}&units=metric`
    return this.httpClient.get<T>(url);
  }
}

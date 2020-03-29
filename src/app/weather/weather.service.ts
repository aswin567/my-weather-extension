import { Injectable } from '@angular/core';
import { ApiService } from '../api.service';
import { Observable } from 'rxjs';
import { CurentWeatherRoot, Coord } from './weather-object';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private apiService: ApiService) { }

  getCurrentWeather(location: Coord): Observable<CurentWeatherRoot>{
    const uri:string = 'weather';
    return this.apiService.apiGet<CurentWeatherRoot>(location, uri)
  }

  }


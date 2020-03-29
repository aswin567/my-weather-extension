import { Component, OnInit } from '@angular/core';
import { WeatherService } from './weather.service';
import { Coord, CurentWeatherRoot } from './weather-object';
import { Observable } from 'rxjs';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {
  currentLocation: CurentWeatherRoot;

  constructor(private weatherService: WeatherService, private apiService: ApiService) { }

  ngOnInit() {
    this.getLocation();
  }

  getCurrentWeather(location: Coord){
    this.apiService.isLoading$.next(true);
    this.weatherService.getCurrentWeather(location).subscribe((weatherDetails: CurentWeatherRoot)=>{
      this.currentLocation = weatherDetails;
      this.apiService.isLoading$.next(false);
    });
  }

  getLocation(){
    let location: Coord={
      lat: null,
      lon: null
    };

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position: Position)=>{
        location.lat = position.coords.latitude;
        location.lon = position.coords.longitude;
        this.getCurrentWeather(location);
      });
    }
  }
}

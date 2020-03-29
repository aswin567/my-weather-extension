import { Component } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  isLoading$: Observable<boolean>;

  constructor( private apiService: ApiService){
    this.isLoading$ = apiService.isLoading$;
  }
}

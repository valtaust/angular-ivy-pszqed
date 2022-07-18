import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class WeatherServService {

	apiKey = 'c074c245788df1799579865e74f04a2b';
	//url;
  
  constructor(private hc: HttpClient) { 
   console.log('Hello WeatherProvider Provider');
  }
  
  getRemoteData(): Observable<any>{
	  return this.hc.get("https://openweathermap.org/current"); //early draft api later 
  }
}
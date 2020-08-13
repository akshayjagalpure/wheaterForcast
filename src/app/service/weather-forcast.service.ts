import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import * as moment from 'moment';
const apiKey: string = environment.apiKey;

@Injectable({
  providedIn: 'root',
})
export class WeatherForcastService {
  constructor(private http: HttpClient) {}

  getCurrentWeather(loc: string) {
    return this.http.get(
      `${environment.apiUrl}/weather?q=${loc}&appid=${apiKey}`
    );
  }

  getForecast(loc: string, noOfDays: number) {
    return this.http.get(
      `${environment.apiUrl}/forecast?q=${loc}&cnt=${noOfDays}&appid=${apiKey}`
    );
  }
}

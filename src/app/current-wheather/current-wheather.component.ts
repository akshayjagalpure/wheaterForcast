import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { WeatherForcastService } from '../service/weather-forcast.service';

@Component({
  selector: 'app-current-wheather',
  templateUrl: './current-wheather.component.html',
  styleUrls: ['./current-wheather.component.scss'],
})
export class CurrentWheatherComponent implements OnInit {
  loc: string;
  currentWeather: any;
  msg: string;
  moreDataFlag: boolean = false;

  _data: any;
  @Input()
  get data(): any {
    return this._data;
  }
  set data(value: any) {
    this._data = value;
    if (this._data != undefined) {
      this.getWeatherData();
    }
  }

  constructor(private service: WeatherForcastService) {
    this.currentWeather = {};
  }

  getWeatherData() {
    this.msg = '';
    this.loc = this._data.search;
    this.service.getCurrentWeather(this.loc).subscribe(
      (res) => {
        this.currentWeather = res;
      },
      (err) => {
        if (err.error && err.error.message) {
          alert(err.error.message);
          this.msg = err.error.message;
          return;
        }
        alert('Failed to get weather.');
      },
      () => {}
    );
  }

  resultFound() {
    return Object.keys(this.currentWeather).length > 0;
  }

  showMoreData() {
    this.moreDataFlag = true;
  }

  ngOnInit(): void {
    // this.getWeatherData();
  }
}

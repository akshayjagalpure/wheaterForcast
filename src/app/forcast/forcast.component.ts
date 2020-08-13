import { Component, OnInit, Input } from '@angular/core';

import { WeatherForcastService } from '../service/weather-forcast.service';

@Component({
  selector: 'app-forcast',
  templateUrl: './forcast.component.html',
  styleUrls: ['./forcast.component.scss'],
})
export class ForcastComponent implements OnInit {
  forecast: any;
  loc: string;
  cityname: string;
  noOfDays: number;
  msg: string;
  chartData: any;

  _data: any;
  @Input()
  get data(): any {
    return this._data;
  }
  set data(value: any) {
    this._data = value;
    if (this._data != undefined) {
      this.getForeCastData();
    }
  }

  constructor(private service: WeatherForcastService) {
    this.forecast = [];
  }

  getForeCastData() {
    this.msg = '';
    this.loc = this._data.search;

    this.noOfDays = 7;

    this.service.getForecast(this.loc, this.noOfDays).subscribe(
      (res: any) => {
        this.forecast = res.list;
        this.cityname = res.city.name;
        this.setChartData();
      },
      (err) => {
        if (err.error && err.error.message) {
          alert(err.error.message);
          this.msg = err.error.message;
          return;
        }
        alert('Failed to get Forecast.');
      },
      () => {}
    );
  }

  setChartData() {
    let max_temp = [];
    let min_temp = [];
    let labels: any;

    for (let i = 0; i < this.forecast.length; i++) {
      max_temp.push(this.forecast[i].main.temp_max);
      min_temp.push(this.forecast[i].main.temp_min);
    }

    var timeFrom = (X) => {
      var dates = [];
      for (let I = 0; I < Math.abs(X); I++) {
        dates.push(
          new Date(
            new Date().getTime() -
              (X >= 0 ? I : I - I - I) * 24 * 60 * 60 * 1000
          )
            .toISOString()
            .slice(0, 10)
        );
      }
      return dates;
    };

    labels = timeFrom(-7);

    this.chartData = {
      labels: labels,
      datasets: [
        {
          label: 'High Temprature',
          data: max_temp,
          fill: false,
          borderColor: '#4bc0c0',
        },
        {
          label: 'Low Temprature',
          data: min_temp,
          fill: false,
          borderColor: '#565656',
        },
      ],
    };
  }

  ngOnInit(): void {
    // this.getForeCastData();
  }
}

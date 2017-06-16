import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class HttpService {
  constructor(private _http: Http) { }
  retrieve(city){
    console.log('entered retrieve');
    let url = "http://api.openweathermap.org/data/2.5/weather?q="+city+"&&appid=e06f6de032117e0a2698105710b12b35";
    console.log(url);
    return this._http.get(url).map(data => data.json()).toPromise();
  }
}

import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/observable';
import 'rxjs/add/operator/map';

@Injectable()
export class YesNoService {
  private url: string = 'https://yesno.wtf/api';

  constructor(private http: Http) { }

  getAnswer(): Observable<any> {
    return this.http.get(this.url)
      .map(response => response.json());
  }
}
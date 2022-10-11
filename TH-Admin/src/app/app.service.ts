import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';

import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AppService implements OnInit {
  constructor(private http: HttpClient) {}
  ngOnInit() {}

  Type = new BehaviorSubject('');
  ServerURL = environment.api.Baseurl;
  Form1URL = environment.api.Form1URL;
  Form2URL = environment.api.Form2URL;
  getForm1Data(form) {
    let URL = '';
    if (form == 'Form1') {
      URL = this.Form1URL;
    } else {
      URL = this.Form2URL;
    }
    return this.http.get(`${this.ServerURL}${URL}`);
  }
}

import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

const isLocal = location.hostname === 'localhost'

@Injectable()
export class DataService {

  constructor(public http: Http) {
    console.log('Data service connected...');
  }

  getUsers() {
    return this.http.get(isLocal ? '/int/all/users' : 'http://localhost:4567/all/users').map(res => res.json());
  }

  getSchedules() {
    return this.http.get('http://localhost:4567/all/qualifications').map(res => res.json());
  }
}

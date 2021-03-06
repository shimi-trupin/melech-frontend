import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Schedule } from '../classes/shcedule-model';
import 'rxjs/Rx';
import {User} from "../classes/user-model";

// const isLocal = location.hostname === '192.168.0.36:4567';
const isLocal = location.hostname === 'localhost';

@Injectable()
export class DataStorageService {

  constructor(private httpClient: HttpClient) { }

  getSchedules() {
    return this.httpClient.get<Schedule[]>(isLocal ? '/int/all/schedules' : 'http://localhost:4567/all/schedules', {
      // observe: 'body',
      responseType: 'json'
    });
    /*.subscribe(
      (schedules: Schedule[]) => {
        this.data
      }
    );*/
    // return this.http.get(isLocal ? '/int/all/users' : 'http://localhost:4567/all/users').map(res => res.json());
  }
  getUsers() {
    return this.httpClient.get<User[]>(isLocal ? '/int/all/users' : 'http://localhost:4567/all/users', {
      responseType: 'json'
    });
  }

  getReschedule() {
    console.log('trying to reschedule...');
    return this.httpClient.get(isLocal ? '/int/all/users' : 'http://localhost:4567/reschedule');
  }
}

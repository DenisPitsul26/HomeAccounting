import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {User} from '../models/user.model';
import {map} from 'rxjs/operators';
import {BaseApi} from '../core/base-api';

@Injectable()
export class UsersService extends BaseApi {

  constructor(public http: HttpClient) {
    super(http);
  }

  getUserByEmail(email: string): Observable<any> {
    return this.get(`users?email=${email}`)
      .pipe(map((users: User[]) => {
        return users[0] ? users[0] : undefined;
      }));
  }

  createNewUser(user: User): Observable<any> {
    return this.post('users', user);
  }
}













import {BaseApi} from '../../../shared/core/base-api';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {EventModel} from '../models/event.model';

@Injectable()
export class EventsService extends BaseApi {

  constructor(public http: HttpClient) {
    super(http);
  }

  addEvent(event: EventModel): Observable<any> {
    return this.post('events', event);
  }

  getEvents(): Observable<any> {
    return this.get('events');
  }

  getEventById(id: string): Observable<any> {
    return this.get(`events/${id}`);
  }

}

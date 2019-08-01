import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {BaseApi} from '../../../shared/core/base-api';
import {Bill} from '../models/bill.model';

@Injectable()
export class BillService extends BaseApi {

  constructor(public http: HttpClient) {
    super(http);
  }

  getBill(): Observable<any> {
    return this.get('bill');
  }

  updateBill(bill: Bill): Observable<any> {
    return this.put('bill', bill);
  }

  getCurrency(): Observable<any> {
    return this.http.get('https://www.cbr-xml-daily.ru/daily_json.js');
  }
}













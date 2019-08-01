import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'wfm-currency-card',
  templateUrl: './currency-card.component.html',
  styleUrls: ['./currency-card.component.scss']
})
export class CurrencyCardComponent implements OnInit {

  @Input() currency: any;
  dollar: number;
  euro: number;
  date: Date;

  constructor() {

  }

  ngOnInit(): void {
    const {Valute} = this.currency;
    const {Date} = this.currency;
    this.date = Date;
    this.dollar = Valute.USD.Value;
    this.euro = Valute.EUR.Value;
  }

}

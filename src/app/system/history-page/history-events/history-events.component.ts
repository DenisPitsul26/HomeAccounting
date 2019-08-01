import {Component, Input, OnInit} from '@angular/core';
import {Category} from '../../shared/models/category.model';
import {EventModel} from '../../shared/models/event.model';

@Component({
  selector: 'wfm-history-events',
  templateUrl: './history-events.component.html',
  styleUrls: ['./history-events.component.scss']
})
export class HistoryEventsComponent implements OnInit {

  @Input() categories: Category[] = [];
  @Input() events: EventModel[] = [];
  searchValue = '';
  searchPlaceHolder = 'Сумма';
  searchField = 'amount';

  constructor() { }

  ngOnInit() {
    this.events.forEach((e) => {
      e.categoryName = this.categories.find(c => c.id === e.category).name;
    });
  }

  getEventClass(event: EventModel) {
    return {
      label: true,
      'label-danger': event.type === 'outcome',
      'label-success': event.type === 'income'
    };
  }

  changeCriteria(field: string) {
    const namesMap = {
      amount: 'Сумма',
      date: 'Дата',
      category: 'Категория',
      type: 'Тип'
    };
    this.searchPlaceHolder = namesMap[field];
    this.searchField = field;
    this.searchValue = '';
  }
}












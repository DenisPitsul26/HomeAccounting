import {Component, HostBinding, OnInit} from '@angular/core';
import {fadeStateTrigger} from '../shared/animations/fade.animation';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'wfm-system',
  templateUrl: './system.component.html',
  animations: [fadeStateTrigger]
})
export class SystemComponent implements OnInit {

  @HostBinding('@fade') a = true;

  constructor(private title: Title) {
    title.setTitle('Домашняя бухгалтерия');
  }

  ngOnInit() {
  }

}











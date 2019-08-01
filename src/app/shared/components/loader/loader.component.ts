import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'wfm-loader',
  templateUrl: './loader.component.html',
  styles: [`
    @keyframes pace-spinner {
      from{
        transform: rotate(0deg);
      }
      to{
        transform: rotate(360deg);
      }
    }

    .loader-animator {
      display: block;
      animation: pace-spinner 400ms linear infinite;
      border-color: rgba(0, 0, 0, 0.4) rgba(0, 0, 0, 0) rgba(0, 0, 0, 0) rgba(0, 0, 0, 0.4);
      border-image: none;
      border-radius: 50%;
      border-style: solid;
      border-width: 2px;
      height: 16px;
      width: 16px;
      margin: auto;
      z-index: 2000;
    }

  `]
})
export class LoaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

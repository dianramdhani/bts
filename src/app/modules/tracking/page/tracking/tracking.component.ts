import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-tracking',
  templateUrl: './tracking.component.html',
  styleUrls: ['./tracking.component.scss']
})
export class TrackingComponent implements OnInit, AfterViewInit {
  scriptElement = document.createElement('script');
  showTimeline = false;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.scriptElement.src = './dashforge.profile.js';
    document.body.appendChild(this.scriptElement);
  }

  ngOnDestroy() {
    this.scriptElement.parentElement.removeChild(this.scriptElement);
  }

}

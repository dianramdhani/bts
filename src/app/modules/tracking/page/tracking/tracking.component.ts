import { Component, OnInit, AfterViewInit } from '@angular/core';
import { environment } from '@env';

@Component({
  selector: 'app-tracking',
  templateUrl: './tracking.component.html',
  styleUrls: ['./tracking.component.scss']
})
export class TrackingComponent implements OnInit, AfterViewInit {
  dashforgeProfileEl: HTMLLinkElement | HTMLScriptElement;
  showTimeline = false;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    if (environment.production) {
      this.dashforgeProfileEl = document.createElement('link');
      this.dashforgeProfileEl.rel = 'stylesheet';
      this.dashforgeProfileEl.href = './dashforge-profile.css';
      document.head.appendChild(this.dashforgeProfileEl);
    } else {
      this.dashforgeProfileEl = document.createElement('script');
      this.dashforgeProfileEl.src = './dashforge-profile.js';
      document.body.appendChild(this.dashforgeProfileEl);
    }
  }

  ngOnDestroy() {
    this.dashforgeProfileEl.parentElement.removeChild(this.dashforgeProfileEl);
  }

}

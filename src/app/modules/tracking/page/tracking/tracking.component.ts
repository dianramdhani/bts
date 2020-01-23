import { Component } from '@angular/core';
import { replace } from 'feather-icons';

@Component({
  selector: 'app-tracking',
  templateUrl: './tracking.component.html',
  styleUrls: ['./tracking.component.scss']
})
export class TrackingComponent {
  showTimeline = false;

  constructor() { }

  refresh() {
    this.showTimeline = true;
    setTimeout(() => replace(), 100);
  }
}
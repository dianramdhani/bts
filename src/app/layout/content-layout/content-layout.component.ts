import { Component, OnInit, AfterViewInit } from '@angular/core';
import { replace } from 'feather-icons';

@Component({
  selector: 'app-content-layout',
  templateUrl: './content-layout.component.html',
  styleUrls: ['./content-layout.component.scss']
})
export class ContentLayoutComponent implements OnInit, AfterViewInit {
  scriptElement = document.createElement('script');

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.scriptElement.src = './dashforge.js';
    replace();
  }

  ngOnDestroy() {
    this.scriptElement.parentElement.removeChild(this.scriptElement);
  }

}

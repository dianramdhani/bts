import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrackingRoutingModule } from './tracking-routing.module';
import { TrackingComponent } from './page/tracking/tracking.component';


@NgModule({
  declarations: [TrackingComponent],
  imports: [
    CommonModule,
    TrackingRoutingModule
  ]
})
export class TrackingModule { }

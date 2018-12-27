import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MeasurementsComponent } from './measurements/measurements.component';
import { HttpClientModule } from '@angular/common/http';
import { LampComponent } from './lamp/lamp.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import { NgxGaugeModule } from 'ngx-gauge';
import { TempGaugeComponent } from './temp-gauge/temp-gauge.component';
import { HumGaugeComponent } from './hum-gauge/hum-gauge.component';

@NgModule({
  declarations: [
    AppComponent,
    MeasurementsComponent,
    LampComponent,
    TempGaugeComponent,
    HumGaugeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatToolbarModule,
    MatCardModule,
    MatGridListModule,
    MatDividerModule,
    MatListModule,
    NgxGaugeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

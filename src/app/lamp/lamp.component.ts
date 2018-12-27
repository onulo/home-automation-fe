import { Component, OnInit } from '@angular/core';
import { LampService } from '../lamp.service';
import { LampStatus } from '../LampStatus';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-lamp',
  styleUrls: ['./lamp.component.css'],
  template: `
  <mat-card class="card">
    <mat-card-header>
      <mat-card-title>Lamp</mat-card-title>
    </mat-card-header>
    <mat-grid-list cols="2" rowHeight="2:1">
      <mat-grid-tile>
        <mat-slide-toggle 
          [checked]="isLampOn" 
          (change)="toggleLamp($event)">
          Turn ON
        </mat-slide-toggle>
      </mat-grid-tile>
      <mat-grid-tile>
        <mat-slide-toggle 
          [checked]="isNightModeOn" 
          (change)="toggleNightMode($event)">
          Night Mode
        </mat-slide-toggle>
      </mat-grid-tile>
    </mat-grid-list>
</mat-card>
     `
})
export class LampComponent implements OnInit {
 
  isLampOn: boolean;
  isNightModeOn: boolean;

  constructor(private lampService: LampService) { }

  ngOnInit() {
    this.lampService.getLampStatus().subscribe((data: LampStatus) => {
      this.isLampOn = data.lampOn;
      this.isNightModeOn = data.nightModeOn;
    });
  }

  toggleLamp(event: MatSlideToggleChange) {
    if (event.checked == true) {
      this.lampService.lampOn().subscribe((data: boolean) => {
        this.isLampOn = data;
      });
    } else {
      this.lampService.lampOff().subscribe((data: boolean) => {
        this.isLampOn = data;
      });
    }
  }

  toggleNightMode(event: MatSlideToggleChange) {
    if (event.checked == true)
      this.lampService.nightModeOn().subscribe((data: boolean) => {
        this.isNightModeOn = data;
      });
    else {
      this.lampService.nightModeOff().subscribe((data: boolean) => {
        this.isNightModeOn = data;
      });
    }
  }

}

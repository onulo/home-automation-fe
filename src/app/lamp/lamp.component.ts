import { Component, OnInit } from '@angular/core';
import { LampService } from '../lamp.service';
import { LampStatus } from '../LampStatus';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-lamp',
  styleUrls: ['./lamp.component.css'],
  template: `
            <mat-slide-toggle 
              [checked]="isLampOn" 
              (change)="toggleLamp($event)">
            Turn ON
            </mat-slide-toggle>
            <mat-slide-toggle 
              [checked]="isMotionDetectionOn" 
              (change)="toggleNightMode($event)">
            Night mode
            </mat-slide-toggle>
            `
})
export class LampComponent implements OnInit {
  
  isLampOn: boolean;
  isMotionDetectionOn: boolean;

  constructor(private lampService: LampService) { }

  ngOnInit() {
    this.lampService.getLampStatus().subscribe((data: LampStatus) => {
      this.isLampOn = data.isLampOn;
      this.isMotionDetectionOn = data.isMotionDetectionOn;
    });
  }

  toggleLamp(event: MatSlideToggleChange) {
    console.log(event);
    this.lampService.toggleLamp().subscribe((data: boolean) => {
      this.isLampOn = data;
    });

  }

  toggleNightMode(event: MatSlideToggleChange) {
    console.log(event);
    this.lampService.toggleNightMode().subscribe((data: boolean) => {
      this.isMotionDetectionOn = data;
    });
  }

}

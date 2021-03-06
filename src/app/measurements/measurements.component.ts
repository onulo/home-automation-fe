import { Component, OnInit } from '@angular/core';
import { MeasurementsService } from '../measurements.service';
import { Measurement } from '../measurement';
import { interval } from "rxjs/internal/observable/interval";
import { startWith, switchMap } from "rxjs/operators";

@Component({
  selector: 'app-measurements',
  styleUrls: ['./measurements.component.css'],
  templateUrl: './measurements.component.html',
})
export class MeasurementsComponent implements OnInit {

  measurements: Measurement[];

  constructor(private measurementsService: MeasurementsService) { }

  ngOnInit() {
    interval(30000).pipe(
      startWith(0),
      switchMap(() => this.measurementsService.getMeasurements())
    )
      .subscribe((data: Measurement[]) => {
        this.measurements = data;
      });
  }



}

import { Component, OnInit } from '@angular/core';
import { MeasurementsService } from '../measurements.service';
import { Measurement } from '../measurement';
import { interval } from "rxjs/internal/observable/interval";
import { startWith, switchMap } from "rxjs/operators";

@Component({
  selector: 'app-measurements',
  templateUrl: './measurements.component.html',
  styleUrls: ['./measurements.component.css']
})
export class MeasurementsComponent implements OnInit {

  measurements: Measurement[];

  constructor(private measurementsService: MeasurementsService) { }

  ngOnInit() {
    interval(5000).pipe(
      startWith(0),
      switchMap(() => this.measurementsService.getMeasurements())
    )
      .subscribe((data: Measurement[]) => {
        console.log(data)
        this.measurements = data;
      });
  }

}

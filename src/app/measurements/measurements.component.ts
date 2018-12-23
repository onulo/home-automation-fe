import { Component, OnInit } from '@angular/core';
import { MeasurementsService } from '../measurements.service';
import { Measurement } from '../measurement';

@Component({
  selector: 'app-measurements',
  templateUrl: './measurements.component.html',
  styleUrls: ['./measurements.component.css']
})
export class MeasurementsComponent implements OnInit {

  measurements: Measurement[];

  constructor(private measurementsService: MeasurementsService) { }

  ngOnInit() {

    this.measurementsService.getMeasurements().subscribe((data: Measurement[])  =>{
      console.log(data)
      this.measurements = data;
    });
  }

}

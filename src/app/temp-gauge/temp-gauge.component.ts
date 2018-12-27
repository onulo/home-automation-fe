import { Component, OnInit, Input } from '@angular/core';
import { Measurement } from '../measurement';

@Component({
  selector: 'app-temp-gauge',
  templateUrl: './temp-gauge.component.html',
  styleUrls: ['./temp-gauge.component.css']
})
export class TempGaugeComponent implements OnInit {

  @Input() measurement: Measurement;

  gaugeSize = 130;
  gaugeType = "arch";
  thresholdConfig = {
    '-20': { color: '#C5CAE9' },
    '19': { color: '#3F51B5' },
    '25': { color: '#FF4081' }
    
  };

  constructor() { }

  ngOnInit() {
  }

}

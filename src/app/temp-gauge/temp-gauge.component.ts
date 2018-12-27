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
  gaugeType = "semi";
  thresholdConfig = {
    '-20': { color: 'blue' },
    '19': { color: 'green' },
    '25': { color: 'orange' },
    '35': { color: 'red' }
  };

  constructor() { }

  ngOnInit() {
  }

}

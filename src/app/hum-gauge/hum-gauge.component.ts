import { Component, OnInit, Input } from '@angular/core';
import { Measurement } from '../measurement';

@Component({
  selector: 'app-hum-gauge',
  templateUrl: './hum-gauge.component.html',
  styleUrls: ['./hum-gauge.component.css']
})
export class HumGaugeComponent implements OnInit {

  
  @Input() measurement: Measurement;

  gaugeType = "semi";
  gaugeSize = 110;
  thresholdConfig = {
    '0': { color: '#757575' },
    '45': { color: '#3F51B5' },
    '80': { color: '#FF4081' }
    };

  constructor() { }

  ngOnInit() {
  }

}

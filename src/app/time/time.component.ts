import { Component, OnInit } from '@angular/core';
import { DateTime } from 'luxon';
import { DigitComponent } from "./digit.component";

@Component({
  selector: 'time-display',
  template: `
    <digit [currentValue]="time.toFormat('HH').slice(0, 1)" />
    <digit [currentValue]="time.toFormat('HH').slice(1)" />
    <span>:</span>
    <digit [currentValue]="time.toFormat('mm').slice(0, 1)" />
    <digit [currentValue]="time.toFormat('mm').slice(1)" />
    <span>:</span>
    <digit [currentValue]="time.toFormat('ss').slice(0, 1)" />
    <digit [currentValue]="time.toFormat('ss').slice(1)" />
  `,
  standalone: true,
  styles: `
    :host {
      color: #d3be45;
      font-family: "Courier New", monospace;
      font-size: 20vw;
      transition: color 400ms linear;
      }
    `,
  imports: [DigitComponent],
})

export class TimeComponent implements OnInit {
  time = DateTime.now()
  protected readonly DateTime = DateTime;

  ngOnInit() {
    this.timeDisplay()
    setInterval(this.timeDisplay.bind(this), 1000);
  }

  timeDisplay() {
    this.time = DateTime.now()
  }
}

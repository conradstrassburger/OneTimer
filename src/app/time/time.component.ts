import { Component } from '@angular/core';
import { DateTime } from 'luxon';
import { DigitComponent } from "./digit.component";

@Component({
  selector: 'time-display',
  template: `
    <digit [digitFunction]="hour0" />
    <digit [digitFunction]="hour1" />
    <span>:</span>
    <digit [digitFunction]="minute0" />
    <digit [digitFunction]="minute1" />
    <span>:</span>
    <digit [digitFunction]="second0" />
    <digit [digitFunction]="second1" />
  `,
  standalone: true,
  styles: `
    :host {
      color: #d3be45;
      font-family: "Courier New", monospace;
      font-size: 20vw;
      transition: color 400ms linear;
      overflow: hidden;
      }
    `,
  imports: [DigitComponent],
})

export class TimeComponent {
  hour0 = (dt: DateTime) => parseInt(dt.toFormat('HH').slice(0, 1))
  hour1 = (dt: DateTime) => parseInt(dt.toFormat('HH').slice(1))
  minute0 = (dt: DateTime) => parseInt(dt.toFormat('mm').slice(0, 1))
  minute1 = (dt: DateTime) => parseInt(dt.toFormat('mm').slice(1))
  second0 = (dt: DateTime) => parseInt(dt.toFormat('ss').slice(0, 1))
  second1 = (dt: DateTime) => parseInt(dt.toFormat('ss').slice(1))
}

import {Component, OnInit} from '@angular/core';
import {DateTime} from 'luxon';

@Component({
  selector: 'time-display',
  template: `{{ time.toLocaleString(DateTime.TIME_24_WITH_SECONDS) }}`,
  standalone: true,
  styles: `
    :host {
      color: #d3be45;
      font-family: "Courier New", monospace;
      font-size: 20vw;
    }`,
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

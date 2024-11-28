import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'time-display',
  template:  `{{ time }}`,
  standalone: true,
  styles: `
    :host {
      color: #d3be45;
      font-family: "Courier New", monospace;
      font-size: 20vw;
    }`,
})

export class TimeComponent implements OnInit{
  time = "00:00:00";

  ngOnInit() {
    this.timeDisplay()
    setInterval(this.timeDisplay.bind(this), 1000);
  }

  timeDisplay() {
    // we want leading zeroes
    const options: Intl.DateTimeFormatOptions = {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    };

    this.time = Intl.DateTimeFormat(navigator.languages, options).format(new Date());
  }
}

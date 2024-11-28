import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'time-display',
  templateUrl: './time.component.html',
  standalone: true,
  styleUrl: './time.component.css',
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

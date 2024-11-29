import {Component} from '@angular/core';
import {TimeComponent} from './time/time.component';
import {TopbarComponent} from './topbar/topbar.component';
import {DateTime, Duration} from 'luxon';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [TimeComponent, TopbarComponent],
})

export class AppComponent {
  title = 'OneXTimer';
  endDateTime?: DateTime
  remainingTime?: Duration
  // for use in HTML
  protected readonly DateTime = DateTime;

  ngOnInit() {
    this.countDownDisplay()
    setInterval(this.countDownDisplay.bind(this), 1000);
  }

  updateEndDateTime(endDateTime: DateTime | undefined) {
    this.endDateTime = endDateTime
  }

  private countDownDisplay() {
    if (this.endDateTime)
      this.remainingTime = this.endDateTime.diffNow()
  }
}

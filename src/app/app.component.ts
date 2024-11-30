import {Component} from '@angular/core';
import {TimeComponent} from './time/time.component';
import {TopbarComponent} from './topbar/topbar.component';
import {DateTime, Duration} from 'luxon';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [TimeComponent, TopbarComponent],
})

export class AppComponent {
  title = 'OneXTimer';
  endDateTime: DateTime = DateTime.fromMillis(0)
  neededTime = Duration.fromMillis(0)
  remainingTime = Duration.fromMillis(0)
  progress = "0"
  state = State.Init
  // for use in HTML
  protected readonly DateTime = DateTime;
  protected readonly State = State;

  ngOnInit() {
    this.update()
    setInterval(this.update.bind(this), 1000);
  }

  updateEndDateTime(endDateTime: DateTime) {
    this.state = State.Running
    this.endDateTime = endDateTime
    this.neededTime = endDateTime.diffNow()
  }

  private update() {
    if (this.state == State.Running) {
      this.remainingTime = this.endDateTime.diffNow()
      this.progress = (1 - this.remainingTime.toMillis() / this.neededTime.toMillis()) * 100 + "%"
      if (this.endDateTime.diffNow() <= Duration.fromMillis(0))
        this.state = State.Finished
    }
  }

  reset() {
    this.state = State.Init
    this.endDateTime = DateTime.fromMillis(0)
    this.neededTime = Duration.fromMillis(0)
    this.remainingTime = Duration.fromMillis(0)
    this.progress = "0"
  }
}

enum State {
  Init = "INIT",
  Running = "RUNNING",
  Finished = "FINISHED",
}

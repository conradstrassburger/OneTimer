import { Component } from '@angular/core';
import {TimeComponent} from './time/time.component';
import {TopbarComponent} from './topbar/topbar.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [TimeComponent, TopbarComponent],
})

export class AppComponent {
  title = 'OneXTimer';
  endDateTime?: Date
  // for use in HTML
  protected readonly Intl = Intl;
  protected readonly navigator = navigator;
  protected readonly Date = Date;

  updateEndDateTime(endDateTime: Date | null){
    if (endDateTime == null)
      this.endDateTime = undefined // todo ugly?
    else
      this.endDateTime = endDateTime
  }
}

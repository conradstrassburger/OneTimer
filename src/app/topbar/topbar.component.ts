import {Component, EventEmitter, HostBinding, Output} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {DateTime} from 'luxon';

@Component({
  selector: 'topbar',
  templateUrl: './topbar.component.html',
  styleUrl: './topbar.component.css',
  imports: [
    FormsModule
  ],
  standalone: true
})

export class TopbarComponent {
  open = false
  date = "2024-11-29T16:06"
  @Output() endDateTimeSetEvent = new EventEmitter<DateTime | undefined>

  constructor() {
    this.setDefaultTime()
  }

  @HostBinding('class.open') get isOpen() {
    return this.open;
  }

  toggle() {
    this.open = !this.open
  }

  ok() {
    this.endDateTimeSetEvent.emit(DateTime.fromJSDate(new Date(this.date)));
  }

  setDefaultTime() {
    const now = new Date();
    // default 1 hour in future
    now.setTime(now.getTime() + (60 * 60 * 1000))
    now.setMilliseconds(0)
    this.date = this.dateToInputString(now)
    this.endDateTimeSetEvent.emit(undefined)
  }

  // necessary to convert to special format expected by datetime input
  dateToInputString(d: Date) {
    d.setMinutes(d.getMinutes() - d.getTimezoneOffset());
    return d.toISOString().slice(0, 16);
  }
}

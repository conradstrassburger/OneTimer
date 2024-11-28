import {Component, HostBinding} from '@angular/core';

@Component({
  selector: 'topbar',
  templateUrl: './topbar.component.html',
  styleUrl: './topbar.component.css',
  standalone: true
})

export class TopbarComponent {
  open = false
  date: string

  constructor() {
    const now = new Date();
    // default 1 hour in future
    now.setTime(now.getTime() + (60 * 60 * 1000))
    // convert date to needed string format https://stackoverflow.com/a/61082536
    now.setMinutes(now.getMinutes() - now.getTimezoneOffset());
    this.date = now.toISOString().slice(0, 16);
  }

  @HostBinding('class.open') get isOpen() {
    return this.open;
  }

  toggle() {
    this.open = !this.open
  }
}

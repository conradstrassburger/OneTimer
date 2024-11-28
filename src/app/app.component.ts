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
}

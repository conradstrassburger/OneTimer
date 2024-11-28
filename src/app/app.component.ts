import { Component } from '@angular/core';
import {TimeComponent} from './time/time.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [TimeComponent],
})

export class AppComponent {
  title = 'OneXTimer';
}

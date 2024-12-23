import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));

(() => {
  if (Notification.permission === "granted")
    return
  else if (Notification.permission !== "denied") {
    Notification.requestPermission()
  }
})()

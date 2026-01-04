import { Component, OnInit, input } from '@angular/core';
import { DateTime } from 'luxon';

@Component({
    selector: 'digit',
    template: `
    <span [class]="class" [attr.data-next]="nextValue" [attr.data-current]="value"></span>
    `,
    standalone: true,
    styles: `
    span::after {
      display: inline-block;
      content: attr(data-current);
      opacity: 1;
    }
    span::before {
      position: absolute;
      display: inline-block;
      content: "";
    }
    .fade::after {
        animation: fadeOut 450ms;
    }
    .fade::before {
        animation: fadeIn 450ms;
        content: attr(data-next);
    }
    @keyframes fadeIn {
        0% {
            transform: translateY(-25vw) rotateX(-0.25turn);
            opacity: 0;
        }
        100% {
            transform: translateY(0) rotateX(0);
            opacity: 1;
        }
    }
    @keyframes fadeOut {
        0% {
            transform: translateY(0);
            opacity: 1;
        }
        50% {
            opacity: 0;
        }
        100% {
            transform: translateY(20vw);
            opacity: 0;
        }
    }
    `,
})

export class DigitComponent implements OnInit {
    digitFunction = input.required<(dt: DateTime) => number>();
    class = ""
    value: number = 0
    nextValue: number = 0

    ngOnInit() {
        this.value = this.digitFunction().call(this, DateTime.now())
        setInterval(this.timeDisplay.bind(this), 1000);
    }

    timeDisplay() {
        const time = this.digitFunction().call(this, DateTime.now())

        if (time === this.value) return;

        this.nextValue = (this.value + 1) % 10
        
        this.class = "fade"
        
        setTimeout(() => {
            this.class = ""
            this.value = time
        }, 400)
    }
}

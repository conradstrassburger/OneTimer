import { Component, OnInit, input } from '@angular/core';

@Component({
    selector: 'digit',
    template: `
    <span [class]="class">{{ [value] }}</span>
  `,
    standalone: true,
    styles: `
    span {
      transition: opacity 200ms ease;
    }
    .fade {
      opacity: 0.4
    }
    `,
})

export class DigitComponent implements OnInit {
    currentValue = input.required<string>();
    class = ""
    value = ""

    ngOnInit() {
        this.timeDisplay()
        setInterval(this.timeDisplay.bind(this), 1000);
    }

    timeDisplay() {
        const time = this.currentValue()
        if (time === this.value) return;
        this.value = time

        this.class = "fade"
        setTimeout(() => {
            this.class = ""
        }, 200)
    }
}

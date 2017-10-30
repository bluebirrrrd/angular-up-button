import { Component, HostListener, OnInit } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-up-button',
  templateUrl: './up-button.component.html',
  styleUrls: ['./up-button.component.scss'],
  animations: [
    trigger('visible', [
      state('hidden', style({
        opacity: 0
      })),
      state('shown', style({
        opacity: 1
      })),
      transition('* => *', animate('200ms'))
    ])
  ]
})
export class UpButtonComponent implements OnInit {

  buttonVisibility: string;

  constructor() { }

  ngOnInit() {
  }

  /**
   * Scroll to the desired position of window
   * @param x — pixel among horizontal axis
   * @param y — pixel among vertical axis
   */
  scrollTo(to, duration) {
    if (duration <= 0) {
      return;
    }
    const difference = to - window.pageYOffset;
    const perTick = difference / duration * 10;
    setTimeout(() => {
      const scrollSubject = document.body.scrollTop ? document.body : document.documentElement;

      scrollSubject.scrollTop = window.pageYOffset + perTick;
      if (scrollSubject.scrollTop === to) {
        return;
      }
      this.scrollTo(to, duration - 10);
    }, 10);
  }

  /**
   * scroll handler that shows/hides the arrow button depending on scroll position
   */
  @HostListener('window:scroll', ['$event'])
  handleScroll() {
    const offset = 250;
    if (window.pageYOffset > offset) {
      this.buttonVisibility = 'shown';
    } else {
      this.buttonVisibility = 'hidden';
    }
  }

}

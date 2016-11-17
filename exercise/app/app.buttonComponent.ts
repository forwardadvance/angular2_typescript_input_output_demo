import {Component} from '@angular/core';
import {EventEmitter} from '@angular/core';

@Component({
  selector: 'like-button',
  events: ['like'],
  template: `
    <button>Like!!</button>
  `
})
export class ButtonComponent {
  like:any
  constructor() {
    this.like = new EventEmitter();
    this.like.emit();
  }
}

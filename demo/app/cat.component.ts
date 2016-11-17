import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'cat',
    template: `
      <h1 (click)="handleClick()">Hello {{name}}</h1>
    `
})
export class CatComponent {
  @Input() name:string;
  @Output() miow:EventEmitter<any> = new EventEmitter();

  constructor() {}
  handleClick() {
    this.miow.emit();
  }
}

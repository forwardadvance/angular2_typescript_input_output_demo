import {Component, Input, Output, EventEmitter} from '@angular/core';

import {HeroModel} from './hero.model';

@Component({
    selector: "heroEditor",
    template:
    `
      <form (submit)="handleSubmit()">
        <label for="name">Name:</label>
        <input name="name" type="text" [(ngModel)]="hero.name" />
        <button class="button">Done</button>
      </form>
    `
  })
  export class HeroEditorComponent {
    @Input() hero:HeroModel
    @Output() done:EventEmitter<any> = new EventEmitter();

    handleSubmit() {
      this.done.emit(this.hero);
    }
  };

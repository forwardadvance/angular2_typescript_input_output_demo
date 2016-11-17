import {Component, Input, Output, EventEmitter} from '@angular/core';

import {HeroModel} from './hero.model';

@Component({
  selector: "hero",
  template:
  `
    <h1>{{hero.name}}</h1>
    <pre>{{hero | json}}</pre>
  `
})
export class HeroComponent {
  @Input() hero:HeroModel
  constructor() {
  }
};

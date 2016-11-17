import {Component} from '@angular/core';

@Component({
    selector: 'app',
    template: `
      <cat [name]="name" (miow)="miowCount = miowCount + 1"></cat>
      {{miowCount}}
    `
})
export class AppComponent {
  private name: string
  miowCount:number = 0;
  constructor() {
    this.name = 'Mikey the Cat'
  }
}

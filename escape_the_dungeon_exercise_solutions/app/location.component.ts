import {Component, Input, Output, EventEmitter} from '@angular/core';

import {LocationModel} from './location.model';

@Component({
    selector: "location",
    template:
    `
      <h2>You are in: {{location.name}}</h2>
      <p>{{location.description}}</p>
      <h3>Items at this location</h3>
      <ul>
        <li *ngFor="let item of location.items">
          {{item.name}}
          <a (click)="handlePickUpItem(item)">Pick up</a>
        </li>
      </ul>
    `
  })
  export class LocationComponent {
    @Input() location:LocationModel
    @Output() pickUpItem:EventEmitter<any> = new EventEmitter();

    constructor() {}
    handlePickUpItem = function(item:any) {
      this.pickUpItem.emit(item)
    }
  };

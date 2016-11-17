import {Component, Input, Output, EventEmitter} from '@angular/core';

import {InventoryModel} from './inventory.model';

@Component({
    selector: "inventory",
    template:
    `
      <h2>Inventory</h2>
      <li *ngFor="let item of inventory.items">
        {{item.name}}
      </li>
    `
  })
  export class InventoryComponent {
    @Input() inventory:InventoryModel
    constructor() {
    }
  };

import {Component} from '@angular/core';

import {HeroModel} from './hero.model';
import {InventoryModel} from './inventory.model';
import {LocationModel} from './location.model';

@Component({
    selector: "app",
    template:
    `
    <div>
      <a class="button" (click)="editMode = !editMode">
        <span *ngIf="!editMode">Edit</span>
        <span *ngIf="editMode">Done</span>
      </a>
    </div>
    <div *ngIf="!editMode">
      <div class="row">
        <div >
          <hero [hero]="hero"></hero>
        </div>
      </div>
      <div class="row">
        <div >
          <inventory [inventory]="inventory"></inventory>
        </div>
      </div>
      <div class="row">
        <location [location]="location" (pickUpItem)="handlePickUpItem($event)"></location>
      </div>
      <div class="row">
        <button class="button" *ngIf="location.exits.north" (click)="hero.moveNorth()">North</button>
        <button class="button" *ngIf="location.exits.south" (click)="hero.moveSouth()">South</button>
        <button class="button" *ngIf="location.exits.east" (click)="hero.moveEast()">East</button>
        <button class="button" *ngIf="location.exits.west" (click)="hero.moveWest()">West</button>
      </div>
    </div>


    <div class="row" *ngIf="editMode">
      <heroEditor [hero]="hero" (done)="editMode=false"></heroEditor>
    </div>
    `
  })
  export class AppComponent {
    editMode:boolean = false;
    hero:HeroModel = new HeroModel();
    location:LocationModel = new LocationModel();
    inventory:InventoryModel = new InventoryModel();

    handlePickUpItem(item:any) {
      console.log('item picked up', item);
      this.inventory.addItem(item);
      this.location.removeItem(item);
    }
  }

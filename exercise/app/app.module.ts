import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CatComponent } from './cat.component';

@NgModule({
  imports: [ BrowserModule ],
  declarations: [ AppComponent, CatComponent ],
  bootstrap: [ AppComponent ],
})
export class AppModule { }

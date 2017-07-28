import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { AdvertisementFormComponent } from './components/AdvertisementForm/advertisement-form.component'
import { AdvertisementTableComponent } from './components/AdvertisementTable/advertisement-table.component'
import { ContainsPipe } from './pipes/contains/contains.pipe'

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, AdvertisementFormComponent, AdvertisementTableComponent, ContainsPipe ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

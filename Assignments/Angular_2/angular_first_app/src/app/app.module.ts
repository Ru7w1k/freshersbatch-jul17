import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';
import { AdvertisementFormComponent } from './components/AdvertisementForm/advertisement-form.component'
import { AdvertisementTableComponent } from './components/AdvertisementTable/advertisement-table.component'
import { ContainsPipe } from './pipes/contains/contains.pipe'
import { TemplateDrivenFormComponent } from './components/TemplateDrivenForm/template-driven-form.component'

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, AdvertisementFormComponent, AdvertisementTableComponent, ContainsPipe, TemplateDrivenFormComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

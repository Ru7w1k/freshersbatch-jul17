import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router'; 

import { AppComponent }  from './app.component';
import { AdvertisementFormComponent } from './components/AdvertisementForm/advertisement-form.component'
import { AdvertisementTableComponent } from './components/AdvertisementTable/advertisement-table.component'
import { ContainsPipe } from './pipes/contains/contains.pipe'
import { TemplateDrivenFormComponent } from './components/TemplateDrivenForm/template-driven-form.component'
import { ModelDrivenFormComponent } from './components/ModelDrivenForm/model-driven-form.component'
import { FormBuilderComponent } from './components/FormBuilder/form-builder.component'
import { HomeComponent } from './components/Home/home.component'
import { EditAdvertisementComponent } from './components/EditAdvertisement/edit-advertisement.component'

@NgModule({
  imports:      [ BrowserModule, FormsModule, ReactiveFormsModule, RouterModule.forRoot([ 
    {path: '', component: HomeComponent}, 
    {path: 'edit/:id', component: EditAdvertisementComponent} 
  ]) ],
  declarations: [ AppComponent, AdvertisementFormComponent, AdvertisementTableComponent, ContainsPipe, TemplateDrivenFormComponent, ModelDrivenFormComponent, FormBuilderComponent, HomeComponent, EditAdvertisementComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

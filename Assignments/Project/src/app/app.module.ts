import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router'; 
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';
import { HomeComponent } from './components/HomeComponent/home.component'
import { LoginComponent } from './components/LoginComponent/login.component'
import { SignUpComponent } from './components/SignUpComponent/signup.component'

@NgModule({
  imports:      [ BrowserModule, RouterModule.forRoot([ 
                  {path: '', component: HomeComponent}, 
                  // {path: 'adv/:id', component: AdvertisementComponent},
                  {path: 'login', component: LoginComponent},
                  {path: 'signup', component: SignUpComponent},
                  // {path: 'edituser/:username', component: EditProfileComponent},
                  // {path: 'myads/', component: MyAdvertisementsComponent},
                  // {path: 'editadv/:id', component: EditAdvertisementComponent},
                  // {path: 'postadv', component: PostAdvertisementComponent} 
                ]), HttpModule, FormsModule, ReactiveFormsModule,],
  declarations: [ AppComponent, HomeComponent, LoginComponent, SignUpComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

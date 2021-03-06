import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router'; 
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';
import { HomeComponent } from './components/HomeComponent/home.component'
import { SearchComponent } from './components/SearchComponent/search.component'
import { LoginComponent } from './components/LoginComponent/login.component'
import { SignUpComponent } from './components/SignUpComponent/signup.component'
import { PostAdvertisementComponent } from './components/PostAdvertisementComponent/post-advertisement.component'
import { AdvertisementComponent } from './components/AdvertisementComponent/advertisement.component'
import { MyProfileComponent } from './components/MyProfileComponent/myprofile.component'
import { EditAdvertisementComponent } from './components/EditAdvertisementComponent/edit-advertisement.component'
import { MyAdvertisementsComponent } from './components/MyAdvertisementsComponent/my-advertisement.component'

@NgModule({
  imports:      [ BrowserModule, RouterModule.forRoot([ 
                  {path: '', component: HomeComponent},
                  {path: 'search/:search', component: SearchComponent}, 
                  {path: 'adv/:id', component: AdvertisementComponent},
                  {path: 'login', component: LoginComponent},
                  {path: 'signup', component: SignUpComponent},
                  {path: 'profile', component: MyProfileComponent},
                  // {path: 'edituser/:username', component: EditProfileComponent},
                  {path: 'myads', component: MyAdvertisementsComponent},
                  {path: 'editadv/:id', component: EditAdvertisementComponent},
                  {path: 'postAdv', component: PostAdvertisementComponent} 
                ]), HttpModule, FormsModule, ReactiveFormsModule,],
  declarations: [ AppComponent, HomeComponent, LoginComponent, SignUpComponent, PostAdvertisementComponent, AdvertisementComponent, MyProfileComponent, EditAdvertisementComponent, MyAdvertisementsComponent, SearchComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

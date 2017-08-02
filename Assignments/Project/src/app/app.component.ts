import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AdvertisementService } from './services/AdvertisementService/advertisement.service'
import { UserService } from './services/UserService/user.service'
import { NotificationsService } from './services/NotificationService/notification.service'

@Component({
  selector: 'my-app',
  templateUrl: './app-component.html',
  providers: [AdvertisementService, UserService, NotificationsService]
})
export class AppComponent  {
  
  loggedIn: boolean = false;
  username: string = '';
  categories: string[] = [];

  constructor(private advertisementService:AdvertisementService, private userService:UserService, private router:Router, private notificationsService: NotificationsService) {
    this.updateLoginStatus();

    notificationsService.emitChange.subscribe(
      status => {
          this.loggedIn = status;
          if(this.loggedIn) {
            this.username = this.userService.userName;
          }
          console.log('notifications service', status, this.userService.userName);
    });

    this.advertisementService.getCategories().subscribe((res) => 
      res.data.itemList.forEach((element: any) => {
        this.categories.push(element.name)
      })    
    );
  }

  search(text: string) {
    console.log('search clicked', text)
    this.router.navigate(['search',text])
  }

  checkPost() {
    console.log('checkPost')
    if(this.userService.isLoggedIn().status) {
      this.router.navigate(['postAdv']);
    }
    else {
      this.router.navigate(['login']);
    }
  }

  updateLoginStatus() {
    console.log('update Login Status', status)
    let user = this.userService.isLoggedIn();
    this.loggedIn = user.status;
    console.log('update status', this.loggedIn)
    if(this.loggedIn) {
      this.username = user.username;
    }
  }

  logout() {
    this.userService.logout().subscribe(
      (response) => {
        console.log('logged out!');
        this.userService.userName = '';
        this.userService.authToken = '';
        this.userService.loggedIn = false;
        this.loggedIn = false;
      },
      (error) => {
        console.log('error', error);
      })
  }


  
}

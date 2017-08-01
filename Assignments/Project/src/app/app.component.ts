import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AdvertisementService } from './services/AdvertisementService/advertisement.service'
import { UserService } from './services/UserService/user.service'

@Component({
  selector: 'my-app',
  templateUrl: './app-component.html',
  providers: [AdvertisementService, UserService]
})
export class AppComponent  {
  
  loggedIn: boolean = false;
  username: string = '';
  categories: string[] = [];

  constructor(private advertisementService:AdvertisementService, private userService:UserService, private router:Router) {
    let user = userService.isLoggedIn();
    this.loggedIn = user.status;
    if(this.loggedIn) {
      this.username = user.username;
    }

    this.advertisementService.getCategories().subscribe((res) => 
      res.data.itemList.forEach((element: any) => {
        this.categories.push(element.name)
      })    
    );
  }

  selectCategory(category: string) : void {
    
  }


  
}

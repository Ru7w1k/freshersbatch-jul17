import { Component } from '@angular/core';
import { Router } from '@angular/router'

import { AdvertisementService } from '../../services/AdvertisementService/advertisement.service'
import { UserService } from '../../services/UserService/user.service'


@Component({
    selector: 'my-advs',
    templateUrl: './my-advertisement.html'
})
export class MyAdvertisementsComponent {

    actions: string[] = []
    advertisements: Object[] = []

    constructor(private router: Router, private userService: UserService, private advertisementService:AdvertisementService) {
        this.advertisementService.getAdvertisementActions(this.userService.authToken).subscribe(
            (res) => {
                res.data.actionList.forEach(
                    (action: Object) => {
                        this.actions.push(action.name);
                })                    
        });

        this.advertisementService.getUserAdvertisements(this.userService.authToken).subscribe(
            (response) => {
                response.data.mypostList.forEach(
                    (post: Object) => this.advertisements.push(post) 
                )
            }
        )
        
        console.log('myads', this.advertisements);
    } 
       

    deleteAdv(postId: string) {
        this.advertisementService.deleteAdvertisement(postId, this.userService.authToken).subscribe(
            (response) => {
                console.log('res', response)
                this.advertisements = [];
                this.advertisementService.getUserAdvertisements(this.userService.authToken).subscribe(
                    (response) => {
                        response.data.mypostList.forEach(
                            (post: Object) => this.advertisements.push(post) 
                        )
                }
            )
               

            },
            (error) => {
                console.log('err', error)
            }
        )
    }
        


    

}
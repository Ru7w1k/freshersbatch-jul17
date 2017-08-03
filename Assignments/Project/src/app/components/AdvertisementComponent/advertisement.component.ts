import { Component } from '@angular/core';

import { AdvertisementService } from '../../services/AdvertisementService/advertisement.service'
import { UserService } from '../../services/UserService/user.service'
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'adv',
    templateUrl: './advertisement.html'
})
export class AdvertisementComponent {

    adv: Object = {};

    constructor(private advertisementService:AdvertisementService, private activatedRoute: ActivatedRoute, private userService: UserService, private router: Router) {
        let postId = this.activatedRoute.snapshot.params['id'];
        advertisementService.getAdvertisement(postId).subscribe(
            (response) => {
                this.adv = response.data.mypost;
                console.log(response.data.mypost);
            }
        )

        console.log('adv', this.adv)
    }

    sendMsg(msg: string) {
        console.log('send msg', msg)

        $('#myModal').modal('hide');

        if(!this.userService.isLoggedIn().status) {
            this.router.navigate(['login']);
            return;
        }

        this.advertisementService.sendMessage(msg, this.adv.id, this.userService.authToken).subscribe(
            (response) => {
                console.log('msg sent', response)
            }
        );

        this.router.navigate(['adv/', this.adv.id]);
    }

}
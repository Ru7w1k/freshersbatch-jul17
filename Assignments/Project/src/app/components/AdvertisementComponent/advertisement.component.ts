import { Component } from '@angular/core';

import { AdvertisementService } from '../../services/AdvertisementService/advertisement.service'
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'adv',
    templateUrl: './advertisement.html'
})
export class AdvertisementComponent {

    adv: Object = {};

    constructor(private advertisementService:AdvertisementService, private activatedRoute: ActivatedRoute) {
        let postId = this.activatedRoute.snapshot.params['id'];
        advertisementService.getAdvertisement(postId).subscribe(
            (response) => {
                this.adv = response.data.mypost;
                console.log(response.data.mypost);
            }
        )

        console.log('adv', this.adv)
    }

}
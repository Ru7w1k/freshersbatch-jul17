import { Component } from '@angular/core';
import { Adv } from '../../classes/Adv/adv.class';

@Component({
    selector: 'advertisement-table',
    templateUrl: './advertisement-table.html',
    inputs: ['allAds']
})

export class AdvertisementTableComponent {
    allAds: Adv[];
    delAdv(ad : Adv) : void {
        this.allAds.forEach((adv) => {
            if(adv === ad) {
                
            }
        });
    }

}
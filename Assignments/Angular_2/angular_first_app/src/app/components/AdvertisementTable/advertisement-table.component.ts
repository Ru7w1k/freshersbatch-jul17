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
        for(let i = 0 ; i < this.allAds.length ; i++) {
            if(this.allAds[i] === ad) {
                this.allAds.splice(i,1);
            }
        }
    }

    editAdv(ad: Adv) : void {

    }

}
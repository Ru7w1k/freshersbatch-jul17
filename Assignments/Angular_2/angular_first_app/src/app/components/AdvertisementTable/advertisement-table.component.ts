import { Component } from '@angular/core';
import { Adv } from '../../classes/Adv/adv.class';
import { AdvertisementService } from '../../services/AdvertisementService/advertisement.service'

@Component({
    selector: 'advertisement-table',
    templateUrl: './advertisement-table.html'    
})

export class AdvertisementTableComponent {
    allAds: Adv[];
    result: string;

    constructor(private advertisementService: AdvertisementService ) {
        this.allAds = advertisementService.getAllAds();
    }
    
    delAdv(ad : Adv) : void {
        this.advertisementService.delAdv(ad);
    }

    searchByName(name: string) : void {
        let adv = this.advertisementService.getAdv(name);
        if(adv != null) {
            this.result = adv.toString();
        }
    }

    editAdv(ad: Adv) : void {

    }

}
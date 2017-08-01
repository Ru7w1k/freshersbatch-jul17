import { Component } from '@angular/core';
import { Adv } from '../../classes/Adv/adv.class';
import { AdvertisementService } from '../../services/AdvertisementService/advertisement.service';
import { Router } from '@angular/router'; 

@Component({
    selector: 'advertisement-table',
    templateUrl: './advertisement-table.html'    
})

export class AdvertisementTableComponent {
    allAds: Adv[];
    result: string;

    constructor(private advertisementService: AdvertisementService, private router: Router) {
        this.allAds = advertisementService.getAllAds();
    }
    
    delAdv(ad : Adv) : void {
        this.advertisementService.delAdv(ad);
    }

    // searchByName(name: string) : void {
    //     let adv = this.advertisementService.getAdv(name);
    //     if(adv != null) {
    //         this.result = adv.toString();
    //     }
    // }

    editAdv(ad: Adv) : void {
       this.router.navigate(['/edit', ad.id]);
    }

}
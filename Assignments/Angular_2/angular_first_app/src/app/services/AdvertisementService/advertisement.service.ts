import { Injectable } from '@angular/core';
import { Adv } from '../../classes/Adv/adv.class';

@Injectable()
export class AdvertisementService {  
    
    ads: Adv[] = [];

    getAllAds()  {
        console.log('getAllAds', this.ads);
        return this.ads;
    }

    getAdv(name: string) : Adv {
        this.ads.forEach(adv => {
            if(adv.name == name) {
                console.log('return', adv);
                return adv;
            }            
        });
        return null;
    }

    addAdv(adv: Adv) : void {        
        this.ads.push(adv);
        console.log('AddAdv', adv);
    }

    // updateAdv() {

    // }

    delAdv(adv: Adv) : void {
        for(let i = 0 ; i < this.ads.length ; i++) {
            if(this.ads[i] === adv) {
                this.ads.splice(i,1);
            }
        }
    }

}

import { Injectable } from '@angular/core';
import { Adv } from '../../classes/Adv/adv.class';

@Injectable()
export class AdvertisementService {  
    
    ads: Adv[] = [];

    getAllAds()  {
        console.log('getAllAds', this.ads);
        return this.ads;
    }

    getAdv(id: number) : Adv {
        let ans:Adv = null;
        this.ads.forEach(adv => {
            console.log('in foreach', adv.id, 'id', id);
            if(adv.id == id) {
                console.log('return', adv);
                ans = adv;
            }            
        });
        return ans;
    }

    addAdv(adv: Adv) : void {        
        this.ads.push(adv);
        console.log('AddAdv', adv);
        console.log('All Ads', this.ads);
    }

    updateAdv(adv: Adv) : void {
        for(let i = 0 ; i < this.ads.length ; i++) {
            if(this.ads[i].id == adv.id) {
                this.ads[i] = adv;
                console.log('updated');
                break;
            }
        }
    }

    delAdv(adv: Adv) : void {
        for(let i = 0 ; i < this.ads.length ; i++) {
            if(this.ads[i] === adv) {
                this.ads.splice(i,1);
            }
        }
    }

}

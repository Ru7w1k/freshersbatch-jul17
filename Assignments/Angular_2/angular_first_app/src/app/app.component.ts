import { Component } from '@angular/core';
import { Adv } from './classes/Adv/adv.class';
import { AdvertisementService } from './services/AdvertisementService/advertisement.service'

@Component({
  selector: 'my-app',
  template: `<router-outlet></router-outlet>`,
  providers: [AdvertisementService]
  // template: `<advertisement-form (postAdEvent)="addAdv($event)"></advertisement-form>
  //           <advertisement-table [allAds]="this.ads"></advertisement-table>
  //           `,
})
export class AppComponent  { 
  ads: Adv[] = [];
  adFromChild: Adv;

  addAdv(adv: Adv) : void {
    this.ads.push(adv);
    console.log('Added Adv', adv);
    console.log('All Ads', this.ads);
  }

}

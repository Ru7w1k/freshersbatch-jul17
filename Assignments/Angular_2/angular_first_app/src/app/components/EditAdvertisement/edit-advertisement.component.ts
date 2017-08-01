import { Component } from '@angular/core';
import { Adv } from '../../classes/Adv/adv.class';
import { AdvertisementService } from '../../services/AdvertisementService/advertisement.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'edit-advertisement',
    templateUrl: './edit-advertisement.html'    
})
export class EditAdvertisementComponent {
    title: string = "Edit Advertisement";
    ad: Adv;
    categories: string[] = ['Furniture', 'Hardware', 'Mobile'];

    constructor(private router: Router, private advertisementService:AdvertisementService, private activatedRoute: ActivatedRoute) {
        let id:number = +this.activatedRoute.snapshot.params['id'];
        this.ad = advertisementService.getAdv(id);
        console.log('id : ', this.activatedRoute.snapshot.params['id'], this.ad);
    }

    isSelect(category: string) : boolean {
        if(this.ad == null || category == null) {
            return false;
        }
        return this.ad.category === category;
    }

    cancel() : void {
        this.router.navigate(['']);
    }

    updateAdv(title: string, name: string, category: string, desc: string, price: number, id: number) : void {  
        let adv: Adv = new Adv(title, name, category, desc, price, id);
        console.log('updateAdv', adv);
        this.advertisementService.updateAdv(adv);
        this.router.navigate(['']);
    }
}
import { Component } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Adv } from '../../classes/Adv/adv.class';
import { AdvertisementService} from '../../services/AdvertisementService/advertisement.service'

@Component({
    selector: 'advertisement-form',
    templateUrl: './advertisement-form.html',
    // outputs: ['postAdEvent']
})
export class AdvertisementFormComponent {

    name: string = 'Rutwik';
    title: string = 'Post New Adv';
    categories: string[] = ['Furniture', 'Hardware', 'Mobile'];

    postAdEvent = new EventEmitter<Adv> ();

    constructor(private advertisementService : AdvertisementService) {
        
    }

    postAdv(title: string, name: string, category: string, desc: string, price: number) : void {
        this.advertisementService.addAdv(new Adv(title, name, category, desc, price))
        // let adv = new Adv(title, name, category, desc);
        // this.postAdEvent.emit(adv);
    }
}
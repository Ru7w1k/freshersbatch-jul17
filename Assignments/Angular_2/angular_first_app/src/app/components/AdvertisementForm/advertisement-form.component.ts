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

    id: number = 0;
    name: string = 'Rutwik';
    title: string = 'Post New Adv';
    categories: string[] = ['Furniture', 'Hardware', 'Mobile'];

    postAdEvent = new EventEmitter<Adv> ();

    constructor(private advertisementService : AdvertisementService) {
        
    }

    postAdv(title: string, name: string, category: string, desc: string, price: number) : void {
        this.id += 1;
        this.advertisementService.addAdv(new Adv(title, name, category, desc, price,this.id));
        // let adv = new Adv(title, name, category, desc);
        // this.postAdEvent.emit(adv);
    }
}
import { Component } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Adv } from '../../classes/Adv/adv.class';

@Component({
    selector: 'advertisement-form',
    templateUrl: './advertisement-form.html',
    outputs: ['postAdEvent']
})
export class AdvertisementFormComponent {

    name: string = 'Rutwik';
    title: string = 'Post New Adv';
    categories: string[] = ['Furniture', 'Hardware', 'Mobile'];

    postAdEvent = new EventEmitter<Adv> ();

    postAdv(title: string, name: string, category: string, desc: string) : void {
        let adv = new Adv(title, name, category, desc);
        this.postAdEvent.emit(adv);
    }
}
import { Component } from '@angular/core';

@Component({
    selector: 'advertisement-form',
    templateUrl: './advertisement-form.html'
})
export class AdvertisementFormComponent {

    ads: Adv[] = [];
    name: string = 'Rutwik';
    title: string = 'Post New Adv';
    categories: string[] = ['Furniture', 'Hardware', 'Mobile'];
    

    postAdv(title: string, name: string, category: string, desc: string, img:string) : void {
        let adv = new Adv(title, name, category, desc, img);
        this.ads.push(adv);
    }
}

class Adv {
    title: string;
    name: string;
    category: string;
    description: string;
    img: string;

    constructor(title: string, name: string, category: string, description: string, img:string) {
        this.title = title;
        this.name = name;
        this.category = category;
        this.description = description;
        this.img = img;
    }
}
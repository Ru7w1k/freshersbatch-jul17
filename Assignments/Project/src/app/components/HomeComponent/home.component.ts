import { Component } from '@angular/core';

import { AdvertisementService } from '../../services/AdvertisementService/advertisement.service'

@Component({
    selector: 'home',
    templateUrl: './home.html'
})
export class HomeComponent {

    categories: string[] = [];

    constructor(private advertisementService:AdvertisementService) {
        advertisementService.getCategories().subscribe((res) =>
            res.data.itemList.forEach((element: any) => {
                this.categories.push(element.name)
            })
        )
    }

    selectCategory(category: string) : void {

    }

}
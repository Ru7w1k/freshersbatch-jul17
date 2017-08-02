import { Component, OnChanges, SimpleChange } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'

import { AdvertisementService } from '../../services/AdvertisementService/advertisement.service'

@Component({
    selector: 'home',
    templateUrl: './home.html'
})
export class HomeComponent {

    msg:string = '';
    categories: string[] = [];
    advertisements: object[] = [];

    constructor(private advertisementService:AdvertisementService, private router: Router, private activatedRoute: ActivatedRoute) {
        advertisementService.getCategories().subscribe((res) =>
            res.data.itemList.forEach((element: any) => {
                this.categories.push(element.name)
            })
        )

        this.advertisements = [];

        let search = this.activatedRoute.snapshot.params['search'];
        if(search != null && search != undefined && search != '') {
            console.log('if', search)
            advertisementService.searchAdvertisements(search).subscribe((res) => {
                res.data.advertiseList.forEach((ad: object) => {
                    this.advertisements.push(ad);
                })            
            })            
        }
        else {
            console.log('else')
            advertisementService.getAllAdvertisements().subscribe((res) => {
                res.data.advertiseList.forEach((ad: object) => {
                    this.advertisements.push(ad);
                })            
            })            
        }

        if(this.advertisements.length < 1) {
            this.msg = "No Ads Found!";
        }
        else {
            this.msg = '';
        }
        
        console.log(this.advertisements)
    }

    ngOnChanges(changes: SimpleChange) {
        console.log('changes', changes)
        
    }

    selectCategory(category: string) : void {
        console.log('select category')
        this.advertisements = [];
        this.advertisementService.searchAdvertisementByCategory(category).subscribe((res) => {
            res.data.advertiseList.forEach((ad: object) => {
                this.advertisements.push(ad);
            })
        })
    }

}
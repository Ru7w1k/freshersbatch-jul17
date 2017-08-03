import { Component, OnChanges, SimpleChange } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AdvertisementService } from '../../services/AdvertisementService/advertisement.service'

@Component({
    selector: 'search',
    templateUrl: './search.html'
})
export class SearchComponent {

    msg:string = '';
    categories: string[] = [];
    advertisements: Object[] = [];
    search: string = '';

    constructor(private advertisementService:AdvertisementService, private router: Router, private activatedRoute: ActivatedRoute) {
        advertisementService.getCategories().subscribe((res) =>
            res.data.itemList.forEach((element: any) => {
                this.categories.push(element.name)
            })
        )

        this.advertisements = [];

        this.activatedRoute.params.subscribe(
            (val:any) => {
                console.log('params', val)
            this.search = val.search;
            this.updateSearch();
        })  

        // this.search = this.activatedRoute.snapshot.params['search'];
        // console.log('search Text', this.search)
        // this.updateSearch();

        
        console.log(this.advertisements)
    }

    updateSearch() {
        this.advertisements = [];
        console.log('update Search')
        if(this.search != null && this.search != undefined && this.search != '') {
            console.log('if', this.search)
            this.advertisementService.searchAdvertisements(this.search).subscribe((res) => {
                res.data.advertiseList.forEach((ad: Object) => {
                    this.advertisements.push(ad);
                })            
            })            
        }
        else {
            console.log('else')
            this.advertisementService.getAllAdvertisements().subscribe((res) => {
                res.data.advertiseList.forEach((ad: Object) => {
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
    }

    selectCategory(category: string) : void {
        console.log('select category')
        this.advertisements = [];
        this.advertisementService.searchAdvertisementByCategory(category).subscribe((res) => {
            res.data.advertiseList.forEach((ad: Object) => {
                this.advertisements.push(ad);
            })
        })
    }

}
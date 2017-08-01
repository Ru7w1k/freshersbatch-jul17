import { Injectable } from '@angular/core';
import { Headers, Http, Response, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AdvertisementService {

    url: string = 'http://192.168.3.144:9000';

    constructor(private _http: Http ) {

    }

    getCategories() {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');

        let options = new RequestOptions({headers: headers });
        return this._http.get(this.url + "/categories",options).map((response: Response)=>response.json());
    }

    getAdvertisementActions() {

    }

    postAdvertisement() {

    }

    updateAdvertisement() {

    }

    deleteAdvertisement() {

    }

    getUserAdvertisements() {

    }

    getAdvertisement() {

    }

    getPhoto() {

    }

    searchAdvertisement() {

    }

    deletePhoto() {

    }

    viewAdvertisement() {

    }

    sendMessage() {

    }
    

}
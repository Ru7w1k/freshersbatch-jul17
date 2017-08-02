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

    getAllAdvertisements() {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        let options = new RequestOptions({headers: headers });
        return this._http.get(this.url + "/posts/search", options).map((response: Response)=>response.json());  
    }

    searchAdvertisements(text: string) {
        console.log('searh advs', text)
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        let options = new RequestOptions({headers: headers });
        return this._http.get(this.url + "/posts/search/text?searchText=" + text, options).map((response: Response)=>response.json()); 
    }

    getAdvertisementActions() {

    }

    postAdvertisement(adv: Object, authToken: string) {
        console.log('post adv', adv);
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('auth-token', authToken);
        let options = new RequestOptions({headers: headers });
        return this._http.post(this.url + "/postAd", adv, options).map((response: Response)=>response.json()); 
    }

    updateAdvertisement() {

    }

    deleteAdvertisement() {

    }

    getUserAdvertisements() {

    }

    getAdvertisement(postId: string) {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('auth-token', '598145b18562a014399011c8');
        let options = new RequestOptions({headers: headers });
        return this._http.get(this.url + "/post?postId=" + postId, options).map((response: Response)=>response.json());
    }

    getPhoto() {

    }

    searchAdvertisementByCategory(category: string) {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('auth-token', '598145b18562a014399011c8');
        let options = new RequestOptions({headers: headers });
        return this._http.get(this.url + "/posts/search?category=" + category, options).map((response: Response)=>response.json());

    }

    deletePhoto() {

    }

    viewAdvertisement() {

    }

    sendMessage() {

    }
    

}
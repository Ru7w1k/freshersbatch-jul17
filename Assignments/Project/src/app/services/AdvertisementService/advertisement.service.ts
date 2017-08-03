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

    searchAdvertisementsByCategoryAndText(text: string, category: string) {
        console.log('search service by text and cat', text, category);
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        let options = new RequestOptions({headers: headers });
        return this._http.get(this.url + "/posts/search?category=" + category + "&searchText=" + text, options).map((response: Response)=>response.json()); 

    }

    getAdvertisementActions(authToken: string) {
        console.log('get actions adv');
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('auth-token', authToken);
        let options = new RequestOptions({headers: headers });
        return this._http.get(this.url + "/actions", options).map((response: Response)=>response.json()); 
    }

    postAdvertisement(adv: Object, authToken: string) {
        console.log('post adv', adv);
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('auth-token', authToken);
        let options = new RequestOptions({headers: headers });
        return this._http.post(this.url + "/postAd", adv, options).map((response: Response)=>response.json()); 
    }

    updateAdvertisement(adv: Object, authToken: string) {
        console.log('update adv', adv, authToken);
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('auth-token', authToken);
        let options = new RequestOptions({headers: headers});
        return this._http.put(this.url + "/postAd", adv, options).map((response: Response)=>response.json()); 

    }

    deleteAdvertisement(postId: string, authToken: string) {
        console.log('delete adv', postId, authToken);
        let headers = new Headers();
        headers.append('auth-token', authToken);
        let options = new RequestOptions({headers: headers});
        return this._http.delete(this.url + "/post?postId=" + postId, options).map((response: Response)=>response.json());
    }

    getUserAdvertisements(authToken: string) {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('auth-token', authToken);
        let options = new RequestOptions({headers: headers });
        return this._http.get(this.url + "/posts", options).map((response: Response)=>response.json());
    }

    getAdvertisementByAuth(postId: string, authToken: string) {
        let headers = new Headers();
        headers.append('auth-token', authToken);
        let options = new RequestOptions({headers: headers });
        return this._http.get(this.url + "/post?postId=" + postId, options).map((response: Response)=>response.json());
    }

    getAdvertisement(postId: string) {
        let headers = new Headers();
        let options = new RequestOptions({headers: headers });
        return this._http.get(this.url + "/viewAd?postId=" + postId, options).map((response: Response)=>response.json());
    }

    searchAdvertisementByCategory(category: string) {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        let options = new RequestOptions({headers: headers });
        return this._http.get(this.url + "/posts/search?category=" + category , options).map((response: Response)=>response.json());

    }

    sendMessage(msg: string, postId: string, authToken: string) {
        console.log('msg', msg, 'postId', postId, 'token', authToken)
        let headers = new Headers();
        let jsonReq = {message: msg, postId: postId};
        headers.append('Content-Type', 'application/json');
        headers.append('auth-token', authToken);
        let options = new RequestOptions({headers: headers });
        return this._http.post(this.url + "/message", jsonReq, options).map((response: Response)=>response.json());

    }
    

}
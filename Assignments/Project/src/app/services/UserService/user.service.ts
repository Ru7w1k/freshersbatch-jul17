import { Injectable } from '@angular/core';
import { Headers, Http, Response, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {
    
    authToken: string = '';
    userName: string = '';
    loggedIn: boolean = false;
    url: string = 'http://192.168.3.144:9000';

    constructor(private _http: Http) {

    }

    isLoggedIn() {
        return {
            status: this.loggedIn,
            username: this.userName
        };
    }

    login(username: string, password: string) {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        let options = new RequestOptions({headers: headers });
        let jsonReq = {userName: username, password: password};
        return this._http.post(this.url + "/login",jsonReq,options).map((response: Response)=>response.json());
    }

    logout() {

    }

    register() {

    }

    user() {

    }

    

}
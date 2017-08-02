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
        console.log('service login', username);
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        let options = new RequestOptions({headers: headers });
        let jsonReq = {userName: username, password: password};
        return this._http.post(this.url + "/login",jsonReq,options).map((response: Response)=>response.json());
    }

    logout() {
        console.log('service logout', this.userName);
        let headers = new Headers();
        headers.append('auth-token', this.authToken);
        let options = new RequestOptions({headers: headers });
        return this._http.delete(this.url + "/logout",options);
    }

    register(user: object) {
        console.log('service register', user);
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        let options = new RequestOptions({headers: headers });
        return this._http.post(this.url + "/register", user, options).map((response: Response)=>response.json());
    }

    user() {

    }

    

}
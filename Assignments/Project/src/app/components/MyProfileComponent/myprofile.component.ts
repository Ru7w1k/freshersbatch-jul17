import { Component } from '@angular/core';
import { Router } from '@angular/router'
import { FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';

import { AdvertisementService } from '../../services/AdvertisementService/advertisement.service'
import { UserService } from '../../services/UserService/user.service'


@Component({
    selector: 'profile',
    templateUrl: './my-profile.html',
})
export class MyProfileComponent {
    user: Object = {};

    constructor(private userService: UserService, private router: Router) {
        userService.userInfo().subscribe(
            (response) => {
                this.user = response.data.user;
                console.log(this.user)
            }
        )
    }
    
}
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';

import { UserService } from '../../services/UserService/user.service'
import { AdvertisementService } from '../../services/AdvertisementService/advertisement.service'
import { NotificationsService } from '../../services/NotificationService/notification.service'
import { AppComponent } from '../../app.component'

@Component({
    selector: 'login',
    templateUrl: './login.html',
    styles: [`input.ng-invalid {border-left: 3px solid red}  input.ng-valid {border-left: 3px solid green`]
})
export class LoginComponent {

    isLoginSuccess: boolean = true;
    loginForm: FormGroup;

    constructor(private advertisementService: AdvertisementService, private formBuilder : FormBuilder, private userService: UserService, private router:Router, private notificationsService: NotificationsService) {
        this.loginForm = this.formBuilder.group({ 
            name: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(10)]],
            password: [null, [Validators.required, Validators.minLength(5), Validators.maxLength(15)]]
        }); 
    }

    login(username: string, password: string) {
        
        console.log('Login Clicked')
        this.userService.login(username, password).subscribe((res) => {
            if(res.data['auth-token'] != null) {           
                this.userService.userName = res.data['userId'];
                this.userService.authToken = res.data['auth-token'];
                this.userService.loggedIn = true;  
                        
                this.router.navigate(['/']);
                this.notificationsService.emit(true);
            }
            else{
                this.isLoginSuccess = false;
            }
        });        
    }
    
}
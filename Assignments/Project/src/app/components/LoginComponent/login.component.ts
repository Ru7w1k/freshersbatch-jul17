import { Component } from '@angular/core';
import { Router } from '@angular/router'
import { FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';

import { UserService } from '../../services/UserService/user.service'

@Component({
    selector: 'login',
    templateUrl: './login.html',
    styles: [`input.ng-invalid {border-bottom: 2px solid red}  input.ng-valid {border-bottom: 2px solid green`]
})
export class LoginComponent {

    isLoginSuccess: boolean = false;
    loginForm: FormGroup;

    constructor(private formBuilder : FormBuilder, private userService: UserService, private router:Router) {
        this.loginForm = this.formBuilder.group({ 
            name: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(10)]],
            password: [null, [Validators.required, Validators.minLength(5), Validators.maxLength(10)]]
        }); 
    }

    login(username: string, password: string) {
        console.log('Login Clicked')
        this.userService.login(username, password).subscribe((res) => {
            if(res.data['auth-token'] != null) {            
                this.userService.userName = res.data['userName'];
                this.userService.authToken = res.data['auth-token'];
                this.userService.loggedIn = true;
                
                this.router.navigate(['']);
            }
        });


    }
    
}
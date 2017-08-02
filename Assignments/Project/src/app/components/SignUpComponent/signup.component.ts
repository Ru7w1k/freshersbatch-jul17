import { Component } from '@angular/core';
import { Router } from '@angular/router'
import { FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';

import { UserService } from '../../services/UserService/user.service'

@Component({
    selector: 'signup',
    templateUrl: './signup.html',
    styles: [`input.ng-invalid {border-left: 3px solid red}  input.ng-valid {border-left: 3px solid green`]
})
export class SignUpComponent {
    signupForm: FormGroup;
    passwordMatch: boolean = false;
    error: boolean = true; 
    success: boolean = true;

    constructor(private formBuilder: FormBuilder, private userService: UserService, private router:Router) {
        this.signupForm = this.formBuilder.group({ 
            firstName: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(10)]],
            lastName: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(10)]],
            username: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(10)]],
            password: [null, [Validators.required, Validators.minLength(5), Validators.maxLength(15)]],
            // confirmPassword: [null, [Validators.required, Validators.minLength(5), Validators.maxLength(15)]],
            email: [null, [Validators.required, Validators.pattern(/^[a-zA-z][a-zA-z0-9]*[@][a-zA-z][a-zA-z0-9]*[/.][a-zA-z]*$/)]],
            mobileNo: [null, [Validators.required, Validators.pattern(/^[1-9]{1}[0-9]{9}$/)]]
        }); 
    }

    signUp(firstName: string, lastName: string, userName: string, password: string, email: string, mobileNo: number) {    
        console.log('Sign Up Clicked!')
        let user = {
            "firstName": firstName,
            "lastName": lastName,
            "userName": userName,
            "password": password,
            "email": email,
            "phone": mobileNo
        };

        this.userService.register(user).subscribe(
            (response) => {
                console.log('response',response.data.message);
                this.error = true;
                this.success = false;
            },
            (error) => {
                console.log('error', error);
                this.error = false;
                this.success = true;
            }
        );
    }

}
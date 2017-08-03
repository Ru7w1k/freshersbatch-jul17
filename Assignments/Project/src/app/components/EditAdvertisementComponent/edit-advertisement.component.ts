import { Component } from '@angular/core';
import { Router } from '@angular/router'
import { FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';

import { UserService } from '../../services/UserService/user.service'
import { AdvertisementService } from '../../services/AdvertisementService/advertisement.service'

@Component({
    selector: 'edit-ad',
    templateUrl: './edit-advertisement.html',
    styles: [`input.ng-invalid {border-left: 3px solid red}  input.ng-valid {border-left: 3px solid green`]
})
export class SignUpComponent {
    editAdvForm: FormGroup;
    categories: string[] = [];
    error: boolean = true; 
    success: boolean = true;

    constructor(private formBuilder: FormBuilder, private userService: UserService, private router:Router, private advertisementService: AdvertisementService) {
        this.advertisementService.getCategories().subscribe((res) => 
            res.data.itemList.forEach((element: any) => {
                this.categories.push(element.name)
            })    

        this.editAdvForm = this.formBuilder.group({            
            title: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
            category: [null, [Validators.required]],
            description: [null, [Validators.required, Validators.minLength(10)]]
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
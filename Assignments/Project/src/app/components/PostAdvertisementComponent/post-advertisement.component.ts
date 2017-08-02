import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';

import { AdvertisementService } from '../../services/AdvertisementService/advertisement.service'
import { UserService } from '../../services/UserService/user.service'


@Component({
    selector: 'post-adv',
    templateUrl: './post-advertisement.html',
    styles: [`input.ng-invalid {border-left: 3px solid red}  input.ng-valid {border-left: 3px solid green} 
        select.ng-invalid {border-left: 3px solid red}  select.ng-valid {border-left: 3px solid green}
        textarea.ng-invalid {border-left: 3px solid red}  textarea.ng-valid {border-left: 3px solid green}`]
})
export class PostAdvertisementComponent {

    postForm: FormGroup;
    categories: string[] = [];
    isPosted: boolean = false;
    isError: boolean = false;
    advId: number = 0;

    constructor(private userService: UserService, private formBuilder: FormBuilder, private advertisementService:AdvertisementService) {
        this.advertisementService.getCategories().subscribe((res) => 
            res.data.itemList.forEach((element: any) => {
                this.categories.push(element.name)
            })    
        );

        this.postForm = this.formBuilder.group({
            title: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
            category: [null, [Validators.required]],
            description: [null, [Validators.required, Validators.minLength(10)]]
        })
    }

    post(title: string, category: string, description: string) {
        let adv = {
            title: title,
            name: this.userService.userName,
            category: category,
            description: description
        };
        this.advertisementService.postAdvertisement(adv, this.userService.authToken).subscribe(
            (response) => {
                console.log('post', response.data.id)
                this.isPosted = true;
                this.isError = false;
                this.advId = response.data.id;
            },
            (error) => {
                this.advId = 0;
                this.isError = true;
                this.isPosted = false;
                console.log('post error', error)
            }
        )
        


    }

}
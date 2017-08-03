import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'
import { FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';

import { UserService } from '../../services/UserService/user.service'
import { AdvertisementService } from '../../services/AdvertisementService/advertisement.service'

@Component({
    selector: 'edit-ad',
    templateUrl: './edit-advertisement.html',
    styles: [`input.ng-invalid {border-left: 3px solid red}  input.ng-valid {border-left: 3px solid green} 
        select.ng-invalid {border-left: 3px solid red}  select.ng-valid {border-left: 3px solid green}
        textarea.ng-invalid {border-left: 3px solid red}  textarea.ng-valid {border-left: 3px solid green}`]
})
export class EditAdvertisementComponent {
    editAdvForm: FormGroup;
    categories: string[] = [];
    isUpdated: boolean = false;
    isError: boolean = false;
    adv: any = {
        postId: 0, 
        status: '', 
        title: '', 
        name: '', 
        category: '', 
        description: ''
    }

    constructor(private formBuilder: FormBuilder, private userService: UserService, private router:Router, private advertisementService: AdvertisementService, private activatedRoute: ActivatedRoute) {

        if(!this.userService.isLoggedIn().status) {
            this.router.navigate(['']);
        }

        this.advertisementService.getCategories().subscribe((res) => 
            res.data.itemList.forEach((element: any) => {
                this.categories.push(element.name)
        }))      

        let id = this.activatedRoute.snapshot.params['id'];
        this.advertisementService.getAdvertisement(id).subscribe(
            (response) => {
                 this.adv.postId = response.data.mypost.id;
                 this.adv.status = response.data.mypost.status;
                 this.adv.title = response.data.mypost.title;
                 this.adv.name = response.data.mypost.name;
                 this.adv.category = response.data.mypost.category;
                 this.adv.description = response.data.mypost.description;
            }
        )

        this.editAdvForm = this.formBuilder.group({            
            title: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
            category: [null, [Validators.required]],
            description: [null, [Validators.required, Validators.minLength(10)]]
        }); 
    }

    editAdv(title: string, category: string, description: string) {
        this.adv.title = title;
        this.adv.category = category;
        this.adv.description = description;

        this.advertisementService.updateAdvertisement(this.adv, this.userService.authToken).subscribe(
            (response) => {
                console.log(response);
                this.isUpdated = true;
                this.isError = false;
            },
            (error) => {                
                console.log(error);
                this.isUpdated = false;
                this.isError = true;
            }
        ) 


    }

}
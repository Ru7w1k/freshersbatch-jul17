import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
import { AdvertisementService } from '../../services/AdvertisementService/advertisement.service'
import { Adv } from '../../classes/Adv/adv.class';

@Component({
    selector: 'form-builder',
    templateUrl: './form-builder.html',
    styles: [`input.ng-invalid {border-bottom: 2px solid red}    input.ng-valid {border-bottom: 2px solid green}
              select.ng-invalid {border-bottom: 2px solid red}   select.ng-valid {border-bottom: 2px solid green}`]
})

export class FormBuilderComponent {    
    id:number = 0;
    categories: string[] = ['Furniture', 'Hardware', 'Mobile'];
    adForm : FormGroup;

    constructor(private formBuilder : FormBuilder, private advertisementService: AdvertisementService) {
        this.adForm = this.formBuilder.group({ 
            title: [null, [Validators.required, Validators.minLength(3)]],
            name: [null, [Validators.required, Validators.minLength(3)]],
            category: [null, [Validators.required]],
            description: [null, [Validators.required, Validators.minLength(10)]],
            price: [null, [Validators.required, Validators.pattern(/^[1-9]{1}[0-9]*$/)]]
        }); 
    }
    
    onSubmit(val: any) : void {
        this.id += 1;
        let adv = new Adv(val.title, val.name, val.category, val.description, val.price, this.id);          
        this.advertisementService.addAdv(adv);  
        console.log('adding adv',adv);
    }
}

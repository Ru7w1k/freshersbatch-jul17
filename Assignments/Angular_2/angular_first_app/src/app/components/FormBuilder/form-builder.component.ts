import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
// import { Adv } from '../../classes/Adv/adv.class';

@Component({
    selector: 'form-builder',
    templateUrl: './form-builder.html',
    styles: [`input.ng-invalid {border-bottom: 2px solid red}    input.ng-valid {border-bottom: 2px solid green}
              select.ng-invalid {border-bottom: 2px solid red}   select.ng-valid {border-bottom: 2px solid green}`]

})

export class FormBuilderComponent {    
    categories: string[] = ['Furniture', 'Hardware', 'Mobile'];
    adForm : FormGroup;

    constructor(private formBuilder : FormBuilder) {
        this.adForm = this.formBuilder.group({ 
            title: new FormControl(null, [Validators.required, Validators.minLength(3)]),
            name: new FormControl(null, [Validators.required, Validators.minLength(3)]),
            category: new FormControl(null, [Validators.required]),
            description: new FormControl(null, [Validators.required, Validators.minLength(10)]),
            price: new FormControl(null, [Validators.required, Validators.pattern(/^[1-9]{1}[0-9]*$/)])
        }); 
    }
    


    onSubmit() : void {
        console.log('Form Submited');
    }
}

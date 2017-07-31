import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
// import { Adv } from '../../classes/Adv/adv.class';

@Component({
    selector: 'model-driven-form',
    templateUrl: './model-driven-form.html',
    styles: [`input.ng-invalid {border-bottom: 2px solid red}    input.ng-valid {border-bottom: 2px solid green}
              select.ng-invalid {border-bottom: 2px solid red}   select.ng-valid {border-bottom: 2px solid green}`]

})

export class ModelDrivenFormComponent {    
    categories: string[] = ['Furniture', 'Hardware', 'Mobile'];

    adForm = new FormGroup({
        title: new FormControl(null, [Validators.required, Validators.minLength(3)]),
        name: new FormControl(null, [Validators.required, Validators.minLength(3)]),
        category: new FormControl(null, [Validators.required]),
        description: new FormControl(null, [Validators.required, Validators.minLength(10)]),
        price: new FormControl(null, [Validators.required, Validators.pattern(/^[1-9]{1}[0-9]*$/)])
    });

    onSubmit() : void {
        console.log('Form Submited');
    }
}

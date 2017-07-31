import { Component } from '@angular/core';
import { Adv } from '../../classes/Adv/adv.class';

@Component({
    selector: 'template-driven-form',
    templateUrl: './template-driven-form.html'
})

export class TemplateDrivenFormComponent {    
    categories: string[] = ['Furniture', 'Hardware', 'Mobile'];
}


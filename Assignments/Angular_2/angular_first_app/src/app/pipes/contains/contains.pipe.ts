import { Pipe, PipeTransform } from '@angular/core';
import { Adv } from '../../classes/Adv/adv.class'

@Pipe({
    name: 'contains'
})
export class ContainsPipe implements PipeTransform { 
    transform(value: Adv[], ...args: string[]): Adv[] {
        let arr:Adv[] = [];
        if(args[0] == '') {
            return value;
        }

        value.forEach((adv) => {            
            if(!(adv == undefined || args[0] == undefined)) {
                if(adv.name.includes(args[0]) || adv.title.includes(args[0])) {
                    arr.push(adv);
                }
            }
        })
        return arr;
    }
}

import {Pipe, PipeTransform} from '@angular/core';
import {IRest} from '../Home/rest.model';

@Pipe({
    name:'searchFilter'
})

export class RestSearchPipe implements PipeTransform{
    transform(value: IRest[], userInput: string){
        userInput = userInput ? userInput.toLowerCase(): '';
        return userInput ? value.filter((data) =>
            ((data.restaurant_name.toLowerCase().indexOf(userInput) > -1)
            || (data.address.toLowerCase().indexOf(userInput) > -1))
        ): value;
    }
}
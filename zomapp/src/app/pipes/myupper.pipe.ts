import {Pipe, PipeTransform }  from '@angular/core';

@Pipe({
    name:'myupper'
})

export class MyUpperPipe implements PipeTransform {
    transform(value: string, kindOf:string): string {
        if(kindOf === 'lower'){
            value = value.toLowerCase()
        }else{
            value = value.toUpperCase()
        }
        return value
    }
}
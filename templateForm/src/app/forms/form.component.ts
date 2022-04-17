import {Component} from '@angular/core';
import { IUser } from './forms.model';
import { NgForm } from '@angular/forms';
import { FormService } from './form.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
    selector:'app-form',
    templateUrl:'./form.component.html'
})

export class FormsComponent{  
    
    constructor(private employeePost: FormService,
        private route: Router){}
    
    language: any[] = ['Node','React','Angular','JavaScript']
    myEmployee = new IUser('John','Michal','a@a.com','12345678','Node')
    hasCodeLangError: boolean = false

    firstToUpper(value: string):void{
        if(value.length>0){
            this.myEmployee.firstname = value.charAt(0).toUpperCase()+value.slice(1).toLowerCase()
        } else{
            this.myEmployee.firstname = value
        } 
    }

    validateCodeLang(): void{
        if(this.myEmployee.clang === 'default'){
            this.hasCodeLangError = true
        }else{
            this.hasCodeLangError = false
        }
    }

    submitForm(Form: NgForm): void{
        console.log(">>>",Form.value)
        this.employeePost.postEmp(Form.value)
            .subscribe((res:any[]) => {console.log('Data Posted',res)})
        this.route.navigate(['/profile'])

    }
}
import { Component, OnInit} from '@angular/core';
import { FormGroup, FormBuilder,
        Validators, AbstractControl} from '@angular/forms';

function rangeCheck(min: Number, max:Number){
    return(checker: AbstractControl):{[key:string]:boolean} | null => {
        if(checker.value !== undefined && (isNaN(checker.value)||checker.value<min|| checker.value>max)){
            return {range: true}
        }
            return null;
    };
}
        
@Component({
    selector: 'app-reactive',
    templateUrl: './survery.component.html'
})



export class EmployeeFormComponent implements OnInit {
    employeeForm: FormGroup;

    constructor(private fb: FormBuilder) {}

    ngOnInit() {
        this.employeeForm = this.fb.group({
            firstName: ['Kevin', [Validators.required,Validators.minLength(3)]],
            lastName: ['Bill', [Validators.required,Validators.maxLength(3)]],
            email: ['a@a', [Validators.required,Validators.pattern('^([a-zA-Z0-9]+)@([a-zA-Z0-9]+)\.([a-zA-Z]{2,5})$')]],
            phone: [''],
            notification:[],
            Rating: ['',[Validators.required, rangeCheck(1,5)]]
        });
    }

    setNotification(notifyVia: string):void{
        const phoneControl = this.employeeForm.get('phone');
        if(notifyVia === 'phone'){
            phoneControl.setValidators(Validators.required)
        } else {
            phoneControl.clearValidators()
        }
        phoneControl.updateValueAndValidity()
    }

}
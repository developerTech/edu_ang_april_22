import {Component} from '@angular/core';
import { IRegister } from './registerform.model';
import { NgForm } from '@angular/forms';
import { RegisterService } from './registerform.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
    selector:'app-form',
    templateUrl:'./registerform.component.html'
})

export class RegisterComponent{  
    
    constructor(private registerUser: RegisterService,
        private route: Router){}
    
    registerForm = new IRegister('Akriti','akriti@gmail.com','12345678',912345678)

    submitForm(Form: NgForm): void{
        console.log(">>>",Form.value)
        this.registerUser.postEmp(Form.value)
            .subscribe((res:any[]) => {console.log('User Register',res)})
        // this.route.navigate(['/profile'])
    }
}
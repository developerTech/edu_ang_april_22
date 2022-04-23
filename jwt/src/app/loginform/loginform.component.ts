import {Component} from '@angular/core';
import { ILogin } from './loginform.model';
import { NgForm } from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import { LoginService } from './loginform.service';

@Component({
    selector:'app-form',
    templateUrl:'./loginform.component.html'
})

export class LoginComponent{  
    
    constructor(private loginUser: LoginService,
        private route: Router){}
    
    loginForm = new ILogin('akriti@gmail.com','12345678')

    submitForm(Form: NgForm): void{
        console.log(">>>",Form.value)
        this.loginUser.postEmp(Form.value)
            .subscribe((res:any[]) => {console.log('User Register',res)})
        // this.route.navigate(['/profile'])
    }
}
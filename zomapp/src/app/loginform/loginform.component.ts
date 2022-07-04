import {Component} from '@angular/core';
import { ILogin, LoginRes, UserRes } from './loginform.model';
import { NgForm } from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import { LoginService } from './loginform.service';

@Component({
    selector:'app-form',
    templateUrl:'./loginform.component.html'
})

export class LoginComponent{  
    loginError:string = ''
    
    constructor(private loginUser: LoginService,
        private route: Router){}
    
    loginForm = new ILogin('neeraj@gmail.com','12345678')

    loginSubmit(Form: NgForm): void{
        console.log(">>>",Form.value)
        this.loginUser.postEmp(Form.value)
            .subscribe(
                (res:LoginRes) => {
                    console.log(res)
                    this.loginError = ""
                    this.loginUser.getUserRole(res['token'])
                    .subscribe((response:UserRes) => (this.validateUser(response)))
                }, 
                (err:any[])=>{
                    console.log(err)
                    this.loginError = "Please Enter Correct Details"
                }
            )
    }

    validateUser(response:UserRes): void{
        localStorage.setItem('Role_Type',response['role']);
        localStorage.setItem('userName',response['name']);
        localStorage.setItem('userEmail',response['email']);
        this.route.navigateByUrl('/', { skipLocationChange: true }).then(() => {
            this.route.navigate(['/']);
        }); 
        // this.route.navigate(['/'])
        // window.location.reload();
    }
} 
import {Component,OnInit} from '@angular/core';
import { LoginService } from '../loginform/loginform.service';
import {ActivatedRoute, Router} from '@angular/router';
import { UserRes } from '../loginform/loginform.model';


@Component({
    selector:'app-profile',
    templateUrl:'./profile.component.html'
})

export class ProfileComponent implements OnInit {  

    userInfo:UserRes = {
                        "_id": "",
                        "name": "",
                        "email": "",
                        "phone": "",
                        "role": "",
                        "__v": 0
                       };
    token:string|null = ''

    constructor(private loginUser: LoginService,
        private route: Router){}

    ngOnInit(){
        this.token = localStorage.getItem('Token_Number')
        this.loginUser.getUserRole(this.token?this.token:'')
        .subscribe((res:UserRes) => this.userInfo = res)
    }

    logoutUser(): void{
        localStorage.removeItem('Token_Number')
        localStorage.removeItem('Role_Type')
        this.route.navigate(['/login'])
    }
    
} 
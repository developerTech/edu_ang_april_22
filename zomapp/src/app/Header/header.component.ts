import {Component} from '@angular/core';
import { UserRes } from '../loginform/loginform.model';
import { LoginService } from '../loginform/loginform.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector:'app-header',
    templateUrl:'./header.component.html',
    styleUrls:['./header.component.css']
})

export class HeaderComponent{

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
        .subscribe( 
            (res:UserRes) => this.userInfo = res)
    }


    logoutUser(): void{
        localStorage.removeItem('Token_Number')
        localStorage.removeItem('Role_Type')
        this.route.navigate(['/'])
        window.location.reload();
    }
    
}
import {Component,OnInit} from '@angular/core';
import { UserService } from './use.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
    selector:'app-user',
    templateUrl:'./user.component.html'
})

export class UserComponent implements OnInit {  

    userList:any[] = []

    constructor(private users: UserService,
        private route: Router){}

    ngOnInit(){
        this.users.getUser()
        .subscribe((res:any[]) => this.userList = res)
    }

    logoutUser(): void{
        localStorage.removeItem('Token_Number')
        localStorage.removeItem('Role_Type')
        this.route.navigate(['/login'])
    }
    
} 
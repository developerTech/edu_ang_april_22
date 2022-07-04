import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginRes, UserRes } from './loginform.model';

@Injectable()

export class LoginService {

    private loginUrl = "https://developerjwt.herokuapp.com/api/auth/login";
    private userInfo = "https://developerjwt.herokuapp.com/api/auth/userinfo"

    constructor(private http:HttpClient){}

    postEmp(user:LoginRes): Observable<LoginRes>{
        return this.http.post<LoginRes>(this.loginUrl, user)
    }

    getUserRole(token:string):Observable<UserRes>{
        localStorage.setItem('Token_Number',token);
        return this.http.get<UserRes>(this.userInfo,{headers:{'x-access-token':token}})
    }
}
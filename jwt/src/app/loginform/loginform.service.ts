import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()

export class LoginService {

    private loginUrl = "https://developerjwt.herokuapp.com/api/auth/login"

    constructor(private http:HttpClient){}

    postEmp(user:any[]): Observable<any[]>{
        return this.http.post<any[]>(this.loginUrl, user)
    }
}
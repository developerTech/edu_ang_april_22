import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { IRest } from '../Home/rest.model';

@Injectable()

export class DetailsService {

    private restUrl = "http://zomatoajulypi.herokuapp.com/details"
   
    constructor(private http:HttpClient){}

    getDetails(restId:number): Observable<IRest[]>{
        return this.http.get<IRest[]>(`${this.restUrl}/${restId}`)
    }

}




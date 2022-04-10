import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { ICity } from '../Home/location.model';
import { IRest } from '../Home/rest.model';
import { IMeal } from '../Home/meal.model';

@Injectable()

export class HomeService {

    private cityUrl = "https://zomatoajulypi.herokuapp.com/location";
    private restUrl = "https://zomatoajulypi.herokuapp.com/restaurant?stateId="
    private mealUrl = "https://zomatoajulypi.herokuapp.com/quicksearch"

    constructor(private http:HttpClient){}

    getCity(): Observable<ICity[]>{
        return this.http.get<ICity[]>(this.cityUrl)
    }

    getMeals(): Observable<IMeal[]>{
        return this.http.get<IMeal[]>(this.mealUrl)
    }

    getRwrtC(stateId:number): Observable<IRest[]>{
        return this.http.get<IRest[]>(`${this.restUrl}${stateId}`)
    }

}
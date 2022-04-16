import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { IRest } from '../Home/rest.model';

@Injectable()

export class ListingService {

    private restUrl = "https://zomatoajulypi.herokuapp.com/restaurant?mealtype_id="
    private cuisineUrl = "https://zomatoajulypi.herokuapp.com/filter"
 
    constructor(private http:HttpClient){}

    getRwrtM(mealId:number): Observable<IRest[]>{
        return this.http.get<IRest[]>(`${this.restUrl}${mealId}`)
    }

    getCuisineData(cuisineId:string):Observable<IRest[]>{
        let id = Number(cuisineId);
        let mealId = sessionStorage.getItem('mealId')
        let url = `${this.cuisineUrl}/${id}?cuisine=${mealId}`
        return this.http.get<IRest[]>(url)
    }
}
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { IRest } from '../Home/rest.model';

@Injectable()

export class ListingService {

    private restUrl = "https://zomatoajulypi.herokuapp.com/restaurant?mealtype_id="
    private cuisineUrl = "https://zomatoajulypi.herokuapp.com/filter"
    private costUrl = "https://zomatoajulypi.herokuapp.com/filter"
 
    constructor(private http:HttpClient){}

    getRwrtM(mealId:number): Observable<IRest[]>{
        return this.http.get<IRest[]>(`${this.restUrl}${mealId}`)
    }

    getCuisineData(cuisineId:string):Observable<IRest[]>{
        let id = Number(cuisineId);
        let mealId = sessionStorage.getItem('mealId')
        let url = `${this.cuisineUrl}/${mealId}?cuisine=${id}`
        return this.http.get<IRest[]>(url)
    }

    getCostData(lcost:number,hcost:number):Observable<IRest[]>{
        let mealId = sessionStorage.getItem('mealId')
        let url = `${this.costUrl}/${mealId}?hcost=${hcost}&lcost=${lcost}`
        return this.http.get<IRest[]>(url)
    }
}
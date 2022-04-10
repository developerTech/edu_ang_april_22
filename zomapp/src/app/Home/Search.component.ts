import {Component, OnInit} from '@angular/core';
import {ICity} from './location.model';
import {HomeService} from '../services/home.service'
import { IRest } from "./rest.model";

@Component({
    selector:'app-search',
    templateUrl:'./Search.component.html',
    styleUrls:['./Search.component.css']
})

export class SearchComponent implements OnInit{
    title: String = 'Find The Best Restaurants Near You';
    textVal : String = 'User Text'
    locations : ICity[] = []
    restaurants: IRest[] = []
    
    constructor(private homeService: HomeService){
        console.log(">>>>>>inside constructor")
    }

    ngOnInit():void{
        this.homeService.getCity()
        .subscribe((data:ICity[]) => this.locations = data)
    }

    handleCity(event:Event){
        console.log((event.target as HTMLInputElement).value)
        let stateId = Number((event.target as HTMLInputElement).value);
        this.homeService.getRwrtC(stateId)
        .subscribe((data:IRest[]) => this.restaurants = data)
    }
}
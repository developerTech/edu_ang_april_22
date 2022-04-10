import {Component, OnInit} from '@angular/core';
import {HomeService} from '../services/home.service'
import {IMeal} from './meal.model';

@Component({
    selector:'app-quick-search',
    templateUrl:'./QuickSearch.component.html',
    styleUrls:['./QuickSearch.component.css']
})

export class QuickSearchComponent implements OnInit {
    title: string = "BreakFast";
    price: number = 10;
    opened = new Date(2022, 3, 9)
    mealType: IMeal[] = [];

    constructor(private homeService: HomeService){}

    ngOnInit():void{
      this.homeService.getMeals()
      .subscribe((data:IMeal[]) => this.mealType = data)
    }
}
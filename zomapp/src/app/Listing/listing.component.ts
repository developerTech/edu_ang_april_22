import {Component,OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ListingService} from '../services/listing.service';
import {IRest} from '../Home/rest.model';

@Component({
    templateUrl:'./listing.Component.html',
    styleUrls:['./listing.Component.css']
})

export class ListingComponent implements OnInit {
    mealId: number = 0;
    city: string | null = '';
    restaurants: IRest[] = [];
    userInput: string = ''
    filterText: string = 'Cuisine Filter'
    cuisineType:string = '1'


    constructor(private route: ActivatedRoute,
        private listingService:ListingService){}

    ngOnInit(){
        this.mealId = Number(this.route.snapshot.params['id']);
        sessionStorage.setItem('mealId', this.route.snapshot.params['id'] )
        this.listingService.getRwrtM(this.mealId)
        .subscribe((data:IRest[]) => {
            this.restaurants = data
        })
    }

    dataReceive(cuisineId: string){
        console.log("cuisineId>>>",cuisineId)
        this.listingService.getCuisineData(cuisineId)
        .subscribe((data:IRest[]) => {
            this.restaurants = data
        })
    }

    costDataReceive(cost: string){
        let lcost = Number(cost.split('-')[0])
        let hcost = Number(cost.split('-')[1])
        this.listingService.getCostData(lcost,hcost)
        .subscribe((data:IRest[]) => {
            this.restaurants = data
        })
    }
}


  // console.log(this.id)
        // this.city = this.route.snapshot.queryParamMap.get('city')
        // console.log(this.city)
        // console.log(this.route.snapshot.queryParamMap.get('state'))
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
    restaurants: IRest[] = []

    constructor(private route: ActivatedRoute,
        private listingService:ListingService){}

    ngOnInit(){
        this.mealId = Number(this.route.snapshot.params['id']);
        sessionStorage.setItem('tripId', this.route.snapshot.params['id'] )
        this.listingService.getRwrtM(this.mealId)
        .subscribe((data:IRest[]) => this.restaurants = data )

        // console.log(this.id)
        // this.city = this.route.snapshot.queryParamMap.get('city')
        // console.log(this.city)
        // console.log(this.route.snapshot.queryParamMap.get('state'))
    }
}
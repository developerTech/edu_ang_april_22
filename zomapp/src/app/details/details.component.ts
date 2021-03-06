import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { DetailsService } from '../services/details.service';
import {IRest} from '../Home/rest.model';

@Component({
    templateUrl:'./details.component.html',
    styleUrls:['./details.component.css']
})

export class DetailsComponent implements OnInit{
    id: number = 0;
    details: IRest[] = []

    constructor(private route: ActivatedRoute,
        private detailsService: DetailsService){}

    ngOnInit(): void {
        this.id = Number(this.route.snapshot.queryParamMap.get('restId'))
        this.detailsService.getDetails(this.id)
        .subscribe((data:IRest[]) => this.details = data)
  
    }
}
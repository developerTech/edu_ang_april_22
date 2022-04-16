import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
    templateUrl:'./details.component.html',
    styleUrls:['./details.component.css']
})

export class DetailsComponent implements OnInit{
    id: number = 0;

    constructor(private route: ActivatedRoute){}

    ngOnInit(): void {
        this.id = Number(this.route.snapshot.queryParamMap.get('restId'))
    }
}
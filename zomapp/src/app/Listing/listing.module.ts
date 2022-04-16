import {NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common'
import { SharedModule } from '../shared/shared.module';
import { ListingComponent } from './listing.component';
import { CuisineFilterComponent } from '../filters/cuisineFilter.component';
import { RestSearchPipe } from '../pipes/restaurant.pipe';
import { ListingService } from '../services/listing.service';


@NgModule({
    declarations: [
        ListingComponent,
        CuisineFilterComponent,

        RestSearchPipe
    ],

    imports: [
        BrowserModule,
        CommonModule,
        SharedModule
    ],

    // All the services will declare here
    providers: [
        ListingService
    ]
})

export class ListingModule {}
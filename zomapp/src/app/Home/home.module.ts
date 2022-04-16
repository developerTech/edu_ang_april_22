import {NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DiscountPipe } from '../pipes/discount.pipe';
import { MyUpperPipe } from '../pipes/myupper.pipe';
import { HomeService } from '../services/home.service';
import { HomeComponent } from './Home.component';
import { QuickSearchComponent } from './QuickSearch.component';
import { SearchComponent } from './Search.component';
import { CommonModule } from '@angular/common'
import { SharedModule } from '../shared/shared.module';


@NgModule({
    declarations: [
        SearchComponent,
        QuickSearchComponent,
        HomeComponent,

        MyUpperPipe,
        DiscountPipe
    ],

    imports: [
        BrowserModule,
        CommonModule,
        SharedModule
    ],

    // All the services will declare here
    providers: [
        HomeService
    ]
})

export class HomeModule {}
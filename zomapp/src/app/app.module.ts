import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './Header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SearchComponent } from './Home/Search.component';
import { QuickSearchComponent } from './Home/QuickSearch.component';
import { HomeComponent } from './Home/Home.component';
import { MyUpperPipe } from './pipes/myupper.pipe';
import { DiscountPipe } from './pipes/discount.pipe';
import { AppRoutingModule } from './app-routing.module';
import { ListingComponent } from './Listing/listing.component';
import { HomeService } from './services/home.service';
import { HttpClientModule } from '@angular/common/http';
import { ListingService } from './services/listing.service';

@NgModule({
    // All the component & pipe
    declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        SearchComponent,
        QuickSearchComponent,
        HomeComponent,
        MyUpperPipe,
        DiscountPipe,
        ListingComponent
    ],

    // All the module will declare here
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule
    ],

    // All the services will declare here
    providers: [
        HomeService,
        ListingService
    ],

    // Only and only one component(main Component)
    bootstrap: [
        AppComponent
    ]
})

export class AppModule {}

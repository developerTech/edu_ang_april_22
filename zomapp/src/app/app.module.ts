import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { HomeModule } from './Home/home.module';
import { ListingModule } from './Listing/listing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './Header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DetailsModule } from './details/details.module';
import { OrderService } from './services/order.service';
import { OrderComponent } from './booking/booking.component';
import { ViewOrderComponent } from './viewOrders/viewOrder.component';

@NgModule({
    // All the component & pipe
    declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        OrderComponent,
        ViewOrderComponent
    ],

    // All the module will declare here
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        HomeModule,
        ListingModule,
        DetailsModule
    ],

    // All the services will declare here
    providers: [
        OrderService
    ],

    // Only and only one component(main Component)
    bootstrap: [
        AppComponent
    ]
})

export class AppModule {}

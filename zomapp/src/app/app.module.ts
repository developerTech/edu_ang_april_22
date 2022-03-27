import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './Header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SearchComponent } from './Home/Search.component';
import { QuickSearchComponent } from './Home/QuickSearch.component';
import { HomeComponent } from './Home/Home.component';

@NgModule({
    // All the component & pipe
    declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        SearchComponent,
        QuickSearchComponent,
        HomeComponent
    ],

    // All the module will declare here
    imports: [
        BrowserModule
    ],

    // All the services will declare here
    providers: [],

    // Only and only one component(main Component)
    bootstrap: [
        AppComponent
    ]
})

export class AppModule {}

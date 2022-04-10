import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './Home/Home.component';
import {ListingComponent} from './Listing/listing.component';

const routes: Routes = [
    {path:'listing/:id',component: ListingComponent},
    {path:'home',component: HomeComponent},
    {path:'',component: HomeComponent},
   
]

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    providers:[],
    exports:[RouterModule]
})

export class AppRoutingModule{}
import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './Home/Home.component';
import {ListingComponent} from './Listing/listing.component';
import {DetailsComponent} from './details/details.component';
import { OrderComponent } from './booking/booking.component';
import { ViewOrderComponent } from './viewOrders/viewOrder.component';


const routes: Routes = [
    {path:'viewOrder',component:ViewOrderComponent},
    {path:'order',component:OrderComponent},
    {path:'details',component: DetailsComponent},
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
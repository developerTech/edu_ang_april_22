import {NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common'
import { SharedModule } from '../shared/shared.module';
import { DetailsComponent } from './details.component';

@NgModule({
    declarations: [
        DetailsComponent,
    ],

    imports: [
        BrowserModule,
        CommonModule,
        SharedModule
    ],

    // All the services will declare here
    providers: [

    ]
})

export class DetailsModule {}
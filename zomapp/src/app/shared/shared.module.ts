import {NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common'
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule } from '@angular/forms';


@NgModule({
    declarations: [
    ],

    imports: [
        BrowserModule,
        CommonModule,
        AppRoutingModule,
        FormsModule
    ],

    exports: [
        AppRoutingModule,
        FormsModule
    ]
})

export class SharedModule {}
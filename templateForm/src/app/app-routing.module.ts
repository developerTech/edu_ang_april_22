import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FormsComponent} from './forms/form.component';
import {AftersubmitComponent} from './aftersubmit/aftersubmit.component';


const routes: Routes = [
  {path:'profile',component: AftersubmitComponent},
  {path:'home',component: FormsComponent},
  {path:'',component: FormsComponent},
 
]

@NgModule({
  imports:[RouterModule.forRoot(routes)],
  providers:[],
  exports:[RouterModule]
})

export class AppRoutingModule { }



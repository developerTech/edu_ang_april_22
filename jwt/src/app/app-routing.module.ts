import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './loginform/loginform.component';
import {RegisterComponent} from './registerforms/registerform.component';


const routes: Routes = [
  {path:'login',component: LoginComponent},
  {path:'home',component: RegisterComponent},
  {path:'',component: RegisterComponent},
 
]

@NgModule({
  imports:[RouterModule.forRoot(routes)],
  providers:[],
  exports:[RouterModule]
})

export class AppRoutingModule { }



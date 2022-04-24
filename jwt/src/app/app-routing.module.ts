import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './loginform/loginform.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfileGaurdService } from './profilegaurd.service';
import {RegisterComponent} from './registerforms/registerform.component';
import { UserGaurdService } from './userGaurd.service';
import { UserComponent } from './UserList/user.component';


const routes: Routes = [
  {path:'users',canActivate:[UserGaurdService],component: UserComponent},
  {path:'profile', canActivate:[ProfileGaurdService], component: ProfileComponent},
  {path:'login',component: LoginComponent},
  {path:'home',component: RegisterComponent},
  {path:'',component: RegisterComponent},
 
]

@NgModule({
  imports:[RouterModule.forRoot(routes)],
  providers:[ProfileGaurdService,UserGaurdService],
  exports:[RouterModule]
})

export class AppRoutingModule { }



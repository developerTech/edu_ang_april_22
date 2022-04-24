import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './registerforms/registerform.component';
import { RegisterService } from './registerforms/registerform.service';
import { LoginComponent } from './loginform/loginform.component';
import { LoginService } from './loginform/loginform.service';
import { ProfileComponent } from './profile/profile.component';
import { UserService } from './UserList/use.service';
import { UserComponent } from './UserList/user.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    ProfileComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    RegisterService,
    LoginService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

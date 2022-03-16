import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { AdminRoutingModule } from './admin-routing.module';
import { MaterialModule } from '../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from './register/register.component';
import { StationComponent } from './station/station.component';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './user/user.component';
import { NavbarComponent } from './navbar/navbar.component';
import { StationsComponent } from './stations/stations.component';
import { HomeComponent } from './home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    LoginComponent,
    MainComponent,
    RegisterComponent,
    StationComponent,
    UsersComponent,
    UserComponent,
    NavbarComponent,
    StationsComponent,
    HomeComponent
  ],
  imports: [
    CommonModule, AdminRoutingModule, MaterialModule, ReactiveFormsModule, HttpClientModule, FormsModule, NgbModule
  ]
})
export class AdminappModule { }

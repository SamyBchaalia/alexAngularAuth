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


@NgModule({
  declarations: [
    LoginComponent,
    MainComponent,
    RegisterComponent,
    StationComponent
  ],
  imports: [
    CommonModule, AdminRoutingModule, MaterialModule, ReactiveFormsModule, HttpClientModule, FormsModule
  ]
})
export class AdminappModule { }

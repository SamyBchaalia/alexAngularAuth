import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { MainComponent } from "./main/main.component";
import { RegisterComponent } from "./register/register.component";
import { UsersComponent } from "./users/users.component";
import { StationsComponent } from "./stations/stations.component";
import { HomeComponent } from "./home/home.component";
import { AuthguardGuard } from "../auth.guard.service";
const routes: Routes = [
    {
        path: "login",
        component: LoginComponent,
    },
    {
        path: "register",
        component: RegisterComponent,
    },
    {
        path: "",
        component: MainComponent,
        canActivate: [AuthguardGuard],
        children: [
            { path: 'users', component: UsersComponent },
            { path: 'stations', component: StationsComponent },
            { path: '', component: HomeComponent }
        ]
    },
    {
        path: "users",
        component: UsersComponent,
    },
]


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class AdminRoutingModule { }
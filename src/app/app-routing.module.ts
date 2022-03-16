import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
const routes: Routes = [
  {
    path: "admin",
    loadChildren: () =>
      import("./adminapp/adminapp.module").then((m) => m.AdminappModule),
  },
  {
    path: "**",
    redirectTo: "admin",
    pathMatch: "full",
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }

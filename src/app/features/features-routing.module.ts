import { Routes, RouterModule } from "@angular/router"
import { NgModule } from "@angular/core"

const routes: Routes = [
  {
    path: "",
    redirectTo: "customer",
    pathMatch: "full"
  },
  {
    path: "customer",
    loadChildren: () => import('./customer/customer.module').then(m => m.CustomerModule)
  }]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeaturesRoutingModule { }

import { Routes, RouterModule } from "@angular/router"
import { NgModule } from "@angular/core"
import { NotFoundComponent } from "../shared/layouts/not-found/not-found.component"

const routes: Routes = [
  {
    path: "",
    redirectTo: "customer",
    pathMatch: "full"
  },
  {
    path: "customer",
    loadChildren: () => import('./customer/customer.module').then(m => m.CustomerModule)
  },
  {
    path: "**",
    component: NotFoundComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeaturesRoutingModule { }

import { Routes, RouterModule } from "@angular/router"
import { NgModule } from "@angular/core"
import { ListCustomerComponent } from "./pages/list-customer/list-customer.component"
const routes: Routes = [{
  path: "",
  component: ListCustomerComponent
}
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }

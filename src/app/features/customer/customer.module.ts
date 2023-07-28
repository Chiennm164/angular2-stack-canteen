import { NgModule } from "@angular/core";
import { pages } from "./pages";
import { components } from "./components";
import { CustomerRoutingModule } from "./customer-routing.module";

@NgModule({
  imports: [CustomerRoutingModule], declarations: [...pages, ...components]
})
export class CustomerModule { }

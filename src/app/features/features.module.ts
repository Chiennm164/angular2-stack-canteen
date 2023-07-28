import { NgModule } from "@angular/core";
import { FeaturesCompoent } from "./features.component";
import { FeaturesRoutingModule } from "./features-routing.module";

@NgModule({
  imports: [FeaturesRoutingModule],
  declarations: [FeaturesCompoent]
})
export class FeaturesModule { }

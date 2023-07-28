import { NgModule } from "@angular/core";
import { FeaturesCompoent } from "./features.component";
import { FeaturesRoutingModule } from "./features-routing.module";
import { SharedModule } from "../shared/shared.module";
@NgModule({
  imports: [FeaturesRoutingModule, SharedModule],
  declarations: [FeaturesCompoent]
})
export class FeaturesModule { }

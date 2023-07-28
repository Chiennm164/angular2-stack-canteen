import { ModuleWithProviders, NgModule } from "@angular/core";
import { components } from "./components";
import { layouts } from "./layouts";

const COMPONENTS = [...components, ...layouts]

@NgModule({
  imports: [],
  exports: [...COMPONENTS],
  declarations: [...COMPONENTS]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders<SharedModule> {
    return {
      ngModule: SharedModule,
      providers: []
    }
  }
}

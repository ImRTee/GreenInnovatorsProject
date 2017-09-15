import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {LinkGroupComponent} from "./link-group/link-group.component";

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'link-group/:category', component: LinkGroupComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}


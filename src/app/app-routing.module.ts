import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [
{path: "landing-page", component: LandingPageComponent},
{path: "details", component: DetailsComponent},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

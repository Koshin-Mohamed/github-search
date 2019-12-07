import { SearchServiceService } from './search-service.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DisplayUserComponent } from './display-user/display-user.component';
import { DisplayRepoComponent } from './display-repo/display-repo.component';
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
import { DetailsComponent } from './details/details.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

@NgModule({
  declarations: [
    AppComponent,
    DisplayUserComponent,
    DisplayRepoComponent,
    DetailsComponent,
    LandingPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [SearchServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }

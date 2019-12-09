import { DateCountPipe } from './date.pipe';
import { SearchServiceService } from './search-service.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DisplayUserComponent } from './display-user/display-user.component';
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
import { DetailsComponent } from './details/details.component';
import { MainPageComponent } from './main-page/main-page.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { CapitalizeDirective } from './capitalize.directive';

@NgModule({
  declarations: [
    AppComponent,
    DisplayUserComponent,
    DetailsComponent,
    MainPageComponent,
    SearchBarComponent,
    DateCountPipe,
    CapitalizeDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [SearchServiceService,SearchBarComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }

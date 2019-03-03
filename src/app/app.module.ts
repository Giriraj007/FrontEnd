import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarNotLogComponent } from './nav-bar-not-log/nav-bar-not-log.component';
import { CrouselTheaterComponent } from './crousel-theater/crousel-theater.component';
import { PopularMoviesComponent } from './popular-movies/popular-movies.component';
import { MovieDetailPageComponent } from './movie-detail-page/movie-detail-page.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import {HttpClientModule} from "@angular/common/http";
import { NarBarLoginComponent } from './nar-bar-login/nar-bar-login.component'
import { Pipe, PipeTransform } from '@angular/core';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarNotLogComponent,
    CrouselTheaterComponent,
    PopularMoviesComponent,
    MovieDetailPageComponent,
    ProfilePageComponent,
    NarBarLoginComponent,
    FooterComponent,
    LoginComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

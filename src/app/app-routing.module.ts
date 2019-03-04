import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavBarNotLogComponent } from './nav-bar-not-log/nav-bar-not-log.component';
import { CrouselTheaterComponent } from './crousel-theater/crousel-theater.component';
import { PopularMoviesComponent } from './popular-movies/popular-movies.component';
import { MovieDetailPageComponent } from './movie-detail-page/movie-detail-page.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { NarBarLoginComponent } from './nar-bar-login/nar-bar-login.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  { path:"",component:NavBarNotLogComponent},
  {path:"main",component:CrouselTheaterComponent},
  {path:"popular",component:PopularMoviesComponent},
  {path:"details/:id",component:MovieDetailPageComponent},
  {path:"Profile",component:ProfilePageComponent},
  {path:"navbarlogin",component:NarBarLoginComponent},
  {path:"footer",component:FooterComponent},
  {path:"login",component:LoginComponent},
  {path:"signup",component:SignupComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

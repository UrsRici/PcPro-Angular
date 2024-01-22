import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { HomeComponent } from './home/home.component';
import { ComponenteComponent } from './componente/componente.component';
import { GamingComponent } from './gaming/gaming.component';
import { LaptopComponent } from './laptop/laptop.component';
import { MobileComponent } from './mobile/mobile.component';
import { MonitoareComponent } from './monitoare/monitoare.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PerifericeComponent } from './periferice/periferice.component';
import { SoftwareComponent } from './software/software.component';
import { LoginComponent } from './login/login.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { CosComponent } from './cos/cos.component';
import { CookieService } from 'ngx-cookie-service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ComponenteComponent,
    GamingComponent,
    LaptopComponent,
    MobileComponent,
    MonitoareComponent,
    NavbarComponent,
    PerifericeComponent,
    SoftwareComponent,
    LoginComponent,
    FavoriteComponent,
    CosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }

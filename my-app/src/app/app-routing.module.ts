import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ComponenteComponent } from './componente/componente.component';
import { GamingComponent } from './gaming/gaming.component';
import { LaptopComponent } from './laptop/laptop.component';
import { MobileComponent } from './mobile/mobile.component';
import { MonitoareComponent } from './monitoare/monitoare.component';
import { PerifericeComponent } from './periferice/periferice.component';
import { SoftwareComponent } from './software/software.component';
import { LoginComponent } from './login/login.component';
import { CosComponent } from './cos/cos.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { NavbarComponent } from './navbar/navbar.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'componente', component: ComponenteComponent },
  { path: 'gaming', component: GamingComponent },
  { path: 'laptop', component: LaptopComponent },
  { path: 'mobile', component: MobileComponent },
  { path: 'monitoare', component: MonitoareComponent },
  { path: 'periferice', component: PerifericeComponent },
  { path: 'software', component: SoftwareComponent },
  { path: 'login', component: LoginComponent },
  { path: 'favorite', component: FavoriteComponent },
  { path: 'cos', component: CosComponent },
  { path: '**', pathMatch: 'full', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }

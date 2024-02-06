import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PptComponent } from './ppt/ppt.component';
import { MenuInicialComponent } from './menu-inicial/menu-inicial.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { Page404Component } from './page404/page404.component';

const routes: Routes = [
  {path: '', component: LandingPageComponent},
  {path: 'piedra-papel-tijera', component: PptComponent},
  {path: 'menu-inicial', component: MenuInicialComponent},
  {path: '**', component: Page404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

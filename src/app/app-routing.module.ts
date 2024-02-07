import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PptComponent } from './ppt/ppt.component';
import { MenuInicialComponent } from './menu-inicial/menu-inicial.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { Page404Component } from './page404/page404.component';
import { DesarrolladorComponent } from './desarrollador/desarrollador.component';
import { InfoComponent } from './info/info.component';
import { TresEnRayaComponent } from './tres-en-raya/tres-en-raya.component';

const routes: Routes = [
  {path: '', component: MenuInicialComponent},
  {path: 'piedra-papel-tijera', component: PptComponent},
  {path: 'menu-inicial/piedra-papel-tijera', component: PptComponent},
  {path: 'menu-inicial/tres-en-raya', component: TresEnRayaComponent},
  {path: 'menu-inicial', component: MenuInicialComponent},
  {path: 'menu-inicial/desarrollador', component: DesarrolladorComponent},
  {path: 'menu-inicial/info', component: InfoComponent},
  {path: '**', component: Page404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

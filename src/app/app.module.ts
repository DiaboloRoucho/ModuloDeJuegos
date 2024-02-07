import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuInicialComponent } from './menu-inicial/menu-inicial.component';
import { PptComponent } from './ppt/ppt.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { Page404Component } from './page404/page404.component';
import { DesarrolladorComponent } from './desarrollador/desarrollador.component';
import { InfoComponent } from './info/info.component';
import {MatTabsModule} from '@angular/material/tabs';
import { TresEnRayaComponent } from './tres-en-raya/tres-en-raya.component';



@NgModule({
  declarations: [
    AppComponent,
    MenuInicialComponent,
    PptComponent,
    LandingPageComponent,
    Page404Component,
    DesarrolladorComponent,
    InfoComponent,
    TresEnRayaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

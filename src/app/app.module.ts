import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import { BoardComponent } from './board/board.component';
import { AccueilComponent } from './accueil/accueil.component';
import { RegionsComponent } from './regions/regions.component';
import { UtilisateurComponent } from './utilisateur/utilisateur.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { DetailpaysComponent } from './detailpays/detailpays.component';
import { DetailregionComponent } from './detailregion/detailregion.component';
import { DetailpaysregionComponent } from './detailpaysregion/detailpaysregion.component';
import { LoginComponent } from './login/login.component';
import { CreercompteComponent } from './creercompte/creercompte.component';
@NgModule({
  declarations: [AppComponent, BoardComponent, AccueilComponent, RegionsComponent, UtilisateurComponent, DetailpaysComponent, DetailregionComponent, DetailpaysregionComponent, LoginComponent, CreercompteComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

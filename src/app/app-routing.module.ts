import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { BoardComponent } from './board/board.component';
import { CreercompteComponent } from './creercompte/creercompte.component';
import { DetailpaysComponent } from './detailpays/detailpays.component';
import { DetailpaysregionComponent } from './detailpaysregion/detailpaysregion.component';
import { DetailregionComponent } from './detailregion/detailregion.component';
import { LoginComponent } from './login/login.component';
import { RegionsComponent } from './regions/regions.component';
import { UtilisateurComponent } from './utilisateur/utilisateur.component';

const routes: Routes = [
    {
    path:"",
    redirectTo:"accueil",
    pathMatch:'full'
  },
  {
    path:"board",
    component: BoardComponent
  },
  {
    path:"accueil",
    component:AccueilComponent
  },
  {
    path:"regions",
    component:RegionsComponent
  },
  {
    path:"utilisateur",
    component:UtilisateurComponent
  },
  {
    path:"detailspays",
    component:DetailpaysComponent
  },
  {
    path:"detailregion",
    component:DetailregionComponent
  },
  {
    path:"detailpaysregion",
    component:DetailpaysregionComponent
  },
  {
    path:"login",
    component:LoginComponent
  },
  {
    path:"creercompte",
    component:CreercompteComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

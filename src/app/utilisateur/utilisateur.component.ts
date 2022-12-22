import { Component, OnInit } from '@angular/core';
import { Role } from '../modeles/role/role';
import { UtilisateurService } from '../services/utilisateur/utilisateur.service';

@Component({
  selector: 'app-utilisateur',
  templateUrl: './utilisateur.component.html',
  styleUrls: ['./utilisateur.component.css']
})
export class UtilisateurComponent implements OnInit {
  utilisateur : any;
  nbuser:number=0;

  

  constructor(public service: UtilisateurService) { }

  ngOnInit(): void {
    this.service.AfficherUtilisateur().subscribe(data=>{
      this.utilisateur = data;
      console.log(data);
      for (const t of this.utilisateur) {
        this.nbuser += 1;
      }
    })
  }

}

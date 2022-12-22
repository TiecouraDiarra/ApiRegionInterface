import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pays } from '../modeles/pays';

@Injectable({
  providedIn: 'root'
})
export class PaysService {

  constructor(private http:HttpClient) { }

  api="http://localhost:8080"

  //Afficher les elements d'un pays
  AfficherPays():Observable<any>
  {
    return this.http.get(`${this.api}/pays/afficher`);
  }

  //AFFICHER LE NOMBRE TOTAL DES PAYS
  TotalePays():Observable<Object>
  {
    return this.http.get(`${this.api}/pays/AfficherNombrePays`);
  }

  //Afficher le nombre de la population mondiale
  TotalePopulationMondiale():Observable<Object>
  {
    return this.http.get(`${this.api}/pays/AfficherNombrePopulationMondiale`);
  }

  //Ajouter un pays 
  AjouterPays(nomPays:string, capitale:string, langueoficielle:string, superficie:string,
    nbpopulationpays:string, presentation:string, devise:string, carteimage:any, drapeuaimage:any):Observable<any>{
    let data = new FormData();
    data.append('nomPays', nomPays);
    data.append('capitale', capitale);
    data.append('langueoficielle', langueoficielle);
    data.append('superficie', superficie);
    data.append('nbpopulationpays', nbpopulationpays);
    data.append('presentation', presentation);
    data.append('devise', devise);
    data.append('carteimage', carteimage);
    data.append('drapeuaimage', drapeuaimage);
    return this.http.post<any>(`${this.api}/pays/ajouter`, data);
  }

  //Afficher details d'un pays
  getIdPays(idpays:number):Observable<Object>
  {
    return this.http.get(`${this.api}/pays/AfficherPaysParID/${idpays}`);
  }

  //Recuperer l'id du pays
  RetrouverParIdPays(idPays:number):Observable<any>{
    return this.http.get(`${this.api}/pays/RetrouverIdPays/${idPays}`);
  }

}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegionService {

  constructor(private http:HttpClient) { }

  api="http://localhost:8080"

  //AFFICHER LE NOMBRE TOTAL DES REGIONS
  TotaleRegion():Observable<Object>
  {
    return this.http.get(`${this.api}/regions/AfficherNombreRegion`);
  }

  //AFFICHER LE NOMBRE TOTAL DES REGIONS PAR PAYS
  TotaleRegionParPays(idpays:number):Observable<Object>
  {
    return this.http.get(`${this.api}/regions/AfficherNombreRegionParPays/${idpays}`);
  }

  //Afficher les elements d'une region
  AfficherRegion():Observable<any>
  {
    return this.http.get(`${this.api}/regions/afficher`);
  }

  //Afficher les elements d'une region par pays
  AfficherRegionParPays(idpays:number):Observable<any>
  {
    return this.http.get(`${this.api}/regions/idpaysregion/${idpays}`);
  }

  //Recuperer l'id de la region
  RetrouverParIdRegion(idRegion:number):Observable<any>{
    return this.http.get(`${this.api}/regions/RetrouverIdRegion/${idRegion}`);
  }


  //Ajouter une région 
  AjouterRegion(code_region:string, nom:string, domaineAct:string, langue:string,
    nb_population:string, presentationRegion:string, photoregion:any, pays : any):Observable<any>{
    let data = new FormData();
    data.append('code_region', code_region);
    data.append('nom', nom);
    data.append('domaineAct', domaineAct);
    data.append('langue', langue);
    //data.append('pays', pays);
    data.append('nb_population', nb_population);
    data.append('presentationRegion', presentationRegion);
    data.append('photoregion', photoregion);
    return this.http.post<any>(`${this.api}/regions/ajouter/${pays}`, data);
  }
}

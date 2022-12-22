import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {

  constructor(private http:HttpClient) { }

  api="http://localhost:8080"
  //Afficher les elements d'une region
  AfficherUtilisateur():Observable<any>
  {
    return this.http.get(`${this.api}/users/toususers`);
  }
}

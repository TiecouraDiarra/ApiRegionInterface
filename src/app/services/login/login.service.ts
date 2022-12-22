import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }
  api="http://localhost:8080/api/auth/signin";

  Connecter(username:String, password:String):Observable<any>
  {
    return this.http.get(`${this.api}/${username}/${password}`);
  }
}

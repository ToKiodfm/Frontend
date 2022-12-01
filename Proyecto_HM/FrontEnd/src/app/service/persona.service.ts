import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { persona } from '../model/persona.model';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  pURL = 'https://backendap-d612d.firebaseapp.com/personas/';

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<persona[]>{
    return this.httpClient.get<persona[]>(this.pURL + 'lista');
  }

  public detail(id: number): Observable<persona>{
    return this.httpClient.get<persona>(this.pURL + `detail/${id}`);
  }
/*
  public save(Persona: persona): Observable<any>{
    return this.httpClient.post<any>(this.pURL + 'create', Persona);
  }*/


  public update(id: number, Persona: persona): Observable<any>{
    return this.httpClient.put<any>(this.pURL + `update/${id}`, Persona);
  }

  /*
  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.URL + `delete/${id}`);
  }*/
}

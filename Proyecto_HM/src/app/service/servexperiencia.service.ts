import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Experiencia } from "../model/Experiencia";

@Injectable({
    providedIn: 'root'
})
export class ServExperienciaService {
   // serURL = 'http://localhost:8080/explab/';
   serURL= 'https://backendaphm.onrender.com/proyectos/explab/';
        
    constructor(private httpClient: HttpClient) { }

    public lista(): Observable<Experiencia[]>{
      return this.httpClient.get<Experiencia[]>(this.serURL + 'lista');
    }
  
    public detail(id: number): Observable<Experiencia>{
      return this.httpClient.get<Experiencia>(this.serURL + `detail/${id}`);
    } 
  
    public save(experiencia: Experiencia): Observable<any>{
      return this.httpClient.post<any>(this.serURL + 'create', experiencia);
    }
  
    public update(id: number, experiencia: Experiencia): Observable<any>{
      return this.httpClient.put<any>(this.serURL + `update/${id}`, experiencia);
    }
  
    public delete(id: number): Observable<any>{
      return this.httpClient.delete<any>(this.serURL + `delete/${id}`);
    }
}

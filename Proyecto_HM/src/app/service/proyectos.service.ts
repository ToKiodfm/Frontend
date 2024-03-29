import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Proyectos } from '../model/proyectos';

@Injectable({
  providedIn: 'root'
})
export class ProyectosService {
  //proyectosURL= 'http://localhost/8080/proyectos/';
  proyectosURL = 'https://backendaphm.onrender.com/proyectos/';

  constructor(private httpClient : HttpClient) { }

  public lista(): Observable<Proyectos[]>{
    return this.httpClient.get<Proyectos[]>(this.proyectosURL + 'lista');
  }

  public detail(id: number): Observable<Proyectos>{
    return this.httpClient.get<Proyectos>(this.proyectosURL + `detail/${id}`);
  }

  public save(proyectos: Proyectos): Observable<any>{
    return this.httpClient.post<any>(this.proyectosURL + 'create', proyectos);
  }

  public update(id: number, proyectos: Proyectos): Observable<any>{
    return this.httpClient.put<any>(this.proyectosURL + `update/${id}`, proyectos);
}

public delete(id: number): Observable<any>{
  return this.httpClient.delete<any>(this.proyectosURL + `delete/${id}`);
}}


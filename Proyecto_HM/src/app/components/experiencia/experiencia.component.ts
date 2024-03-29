import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/app/service/token.service';
import { ServExperienciaService } from 'src/app/service/servexperiencia.service';
import { Experiencia } from 'src/app/model/Experiencia';


@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})

export class ExperienciaComponent implements OnInit{
expe: Experiencia [] = [];
  
  constructor(private servExperiencia: ServExperienciaService, private tokenService: TokenService) {}
  
  isLogged = false;

  ngOnInit(): void {

    this.cargarExperiencia();
    if(this.tokenService.getToken()){
      this.isLogged = true;
          } else {
            this.isLogged = false;
          }
  }

cargarExperiencia(): void{
  this.servExperiencia.lista().subscribe(
    data => {this.expe = data;}
    )
}
delete(id?: number){
  if(id!=undefined){
    this.servExperiencia.delete(id).subscribe(
      {
        next: data=> {this.cargarExperiencia();
        }, 
        error: err=>{
          alert("No se pudo borrar la experiencia");
        }}
    );
  }
}
}
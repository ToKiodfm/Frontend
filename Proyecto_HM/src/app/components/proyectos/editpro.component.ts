import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { subscribeOn } from 'rxjs';
import { Proyectos } from 'src/app/model/proyectos';
import { ProyectosService } from 'src/app/service/proyectos.service';
import { ProyectosComponent } from './proyectos.component';

@Component({
  selector: 'app-editpro',
  templateUrl: './editpro.component.html',
  styleUrls: ['./editpro.component.css']
})
export class EditproComponent implements OnInit {
  proyectos: Proyectos = null;

  constructor(
    private proyectosS: ProyectosService,
    private activatedRouter: ActivatedRoute, 
    private router: Router){}
  
  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.proyectosS.detail(id).subscribe(
      {
        next: data =>{
          this.proyectos=data;
      },

      error: err =>{
        alert("Error al modificar experiencia");
      this.router.navigate(['']);
                    }
    });
  }

  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.proyectosS.update(id,this.proyectos).subscribe(
      data => {
        this.router.navigate(['']);
        }, err => {
                alert("Error al modificar el proyecto");
                this.router.navigate(['']);
        }
    )
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experiencia } from 'src/app/model/Experiencia';
import { ServExperienciaService } from 'src/app/service/servexperiencia.service';

@Component({
  selector: 'app-new-experiencia',
  templateUrl: './new-experiencia.component.html',
  styleUrls: ['./new-experiencia.component.css']
})
export class NewExperienciaComponent implements OnInit {

  nombreE: string = '';
  descripcionE: string = '';

  constructor(private servExperiencia: ServExperienciaService, private router: Router) { }


  ngOnInit(): void {
  }

  onCreate(): void{
    const expe = new Experiencia(this.nombreE, this.descripcionE);
    this.servExperiencia.save(expe).subscribe(
    {
      next: data=>{alert("Experiencia añadida");
  this.router.navigate(['']);
    }, 
    error: err=>{
      alert("Falló agregar experiencia");
      this.router.navigate(['']);
    }
    });
  }
}

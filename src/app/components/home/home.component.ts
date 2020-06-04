import { Component, OnInit } from '@angular/core';
import { TareasService } from '../../services/tareas/tareas.service';
import { Tarea } from '../../models/tarea';
import { Router } from '@angular/router';

declare let $: any; 

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  IsmodelShow: boolean;
  
  tareas:  any = [];
  tarea: Tarea = {
    nombre: '',
    prioridad: '',
    fechaV:  new Date(),
    estado: ''
  }

  constructor(private tareaService: TareasService, private router: Router) { }

  ngOnInit(): void {
    this.getTareas();
  }

  getTareas() {
    this.tareaService.getTarea().subscribe( (res: any) => {
      console.log(res);
      this.tareas = res.tareas;
    }, err => {
      console.log(err);
    })
  };

  saveTarea() {
    this.tareaService.saveTarea(this.tarea)
      .subscribe( (res) =>{
        console.log(res);
        this.router.navigate(['/home']);
      }, (err) => {
        console.log(err);        
      })
  }

  cerrar() {
    this.IsmodelShow=true;
    this.router.navigate(['/home']);
  }

  mostarModal() {
    $('#Modal').modal();
  }

}

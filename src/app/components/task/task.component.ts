import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TareasService } from '../../services/tareas/tareas.service';
import { Tarea } from '../../models/tarea';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  IsmodelShow: boolean;

  tarea: Tarea = {
    nombre: '',
    prioridad: '',
    fechaV:  new Date(),
    estado: ''
  }

  constructor(private router: Router, private tareaService: TareasService ) { }

  ngOnInit(): void {
  }

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

}

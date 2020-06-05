import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { DatePipe } from '@angular/common';

import { TareasService } from '../../services/tareas/tareas.service';
import { Tarea } from '../../models/tarea';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})

export class TaskComponent implements OnInit {

  @Input() public id;
  @Input() public edit: boolean;

  IsmodelShow: boolean;
  closeResult = '';

  tarea: Tarea = {
    _id: '',
    nombre: '',
    prioridad: '',
    fechaV:  '',
    estado: ''
  }

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private tareaService: TareasService, public taskModal: NgbModal, private taskModalActive: NgbActiveModal ) { }

  ngOnInit(): void {
    if (this.edit) {
      this.getTarea(this.id);
    }
    
  }

  getTarea(id) {
    this.tareaService.getTareaOne(this.id).subscribe( (res: any) => {
      this.tarea.nombre = res.tarea.nombre;
      this.tarea.prioridad = res.tarea.prioridad;
      this.tarea.fechaV = res.tarea.fechaV;
      console.log(res);
      
    }, (err)=> {
      console.log(err);
    })
  }

  openModal() {
    this.taskModal.open('#Modal');
  }

  saveTarea() {
    const fecha = new DatePipe('en');
    this.tarea.fechaV = fecha.transform(this.tarea.fechaV, 'yyyy-MM-dd');
    this.tareaService.saveTarea(this.tarea)
      .subscribe( (res) =>{
        console.log(res);
      this.taskModalActive.close('#Modal')
      }, (err) => {
        console.log(err);        
      })
  }

  editTarea() {
  
    this.tareaService.updateTarea(this.id, this.tarea).subscribe( (res) => {
      console.log(res);
      this.taskModalActive.close('#Modal')
      this.router.navigate(['/home']);
    }, (err)=> {
      console.log(err);
    })
  }

  deleteTarea() {
    this.tareaService.deleteTarea(this.id).subscribe( (res)=> {
      console.log(res);
      this.taskModalActive.close('#Modal')
    }, (err)=> {
      console.log(err);
    })
  }

  closeModal() {
    this.taskModalActive.close('#Modal')
  }

}

import { Component, OnInit } from '@angular/core';
import { NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from '../../services/authentication/auth.service';

import { TareasService } from '../../services/tareas/tareas.service';
import { TaskComponent } from '../task/task.component';
import { Tarea } from '../../models/tarea';
import { AlertComponent } from '../alert/alert.component';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  public tareas:  any = [];
  public tarea: Tarea = {
    _id: '',
    nombre: '',
    prioridad: '',
    fechaV: '',
    estado: '',
    proxV: ''
  };

  constructor(private tareaService: TareasService, private ngbModal: NgbModal, private authService: AuthService) { }

  ngOnInit(): void {
    this.getTareas();
  }

  getTareas() {
    this.tareaService.getTarea().subscribe((res: any) => {
      this.tareas = res.tareas;
    }, err => {
      console.log(err);
    })
  };

  openAlertModal() {
    const alertModalOpen = this.ngbModal.open(AlertComponent);
    alertModalOpen.result.then((_result) => {
      this.getTareas();
    });
  }

  mostarModal() {
    const taskModalOpen = this.ngbModal.open(TaskComponent);
    taskModalOpen.result.then((_result) => {
      this.getTareas();
    });
  }

  editTask(id: string) {
    const taskModalOpen = this.ngbModal.open(TaskComponent);
    taskModalOpen.componentInstance.id = id;
    taskModalOpen.componentInstance.edit = true;
    taskModalOpen.result.then((_result) => {
      this.getTareas();
    });
  }

  deleteTask(id: string) {
    const taskModalOpen = this.ngbModal.open(TaskComponent);
    taskModalOpen.componentInstance.id = id;
    taskModalOpen.result.then((_result) => {
      this.getTareas();
    });    
  }
}

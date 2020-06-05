import { Component, OnInit } from '@angular/core';
import { NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from '../../services/authentication/auth.service';

import { TareasService } from '../../services/tareas/tareas.service';
import { TaskComponent } from '../task/task.component';
import { Tarea } from '../../models/tarea';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  IsmodelShow: boolean;
  
  tareas:  any = [];
  tarea: Tarea = {
    _id: '',
    nombre: '',
    prioridad: '',
    fechaV: '',
    estado: ''
  }

  constructor(private tareaService: TareasService, private router: Router, private ngbModal: NgbModal, private activatedRoute: ActivatedRoute, private authService: AuthService) { }

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

  mostarModal() {
    const taskModalOpen = this.ngbModal.open(TaskComponent);
    taskModalOpen.result.then( (result)=> {
      this.getTareas();
    });
  }

  editTask(id) {
    const taskModalOpen = this.ngbModal.open(TaskComponent);
    taskModalOpen.componentInstance.id = id;
    taskModalOpen.componentInstance.edit = true;
    taskModalOpen.result.then( (result)=> {
      this.getTareas();
    });

  }

  deleteTask(id) {
    const taskModalOpen = this.ngbModal.open(TaskComponent);
    taskModalOpen.componentInstance.id = id;
    taskModalOpen.result.then( (result)=> {
      this.tareas = this.tareas.filter( (tarea)=> {
        return tarea._id != id;
      })
    });
    
  }

  LogOut() {
    this.authService.logout();
  }

}

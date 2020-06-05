import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {
  IsmodelShow: boolean;


  constructor( private ngbModal: NgbModal, private ngbactiveModal: NgbActiveModal) { }

  ngOnInit(): void {
    this.openAModal();
  }

  openAModal() {
    this.ngbModal.open('#Modal');
  }

  closeModal() {
    this.ngbactiveModal.close('#Modal')
  }
}

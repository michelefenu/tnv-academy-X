import { Component, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Piatto } from 'src/app/models/piatto';

@Component({
  selector: 'app-edit-piatto',
  templateUrl: './edit-piatto.component.html',
  styleUrls: ['./edit-piatto.component.scss']
})
export class EditPiattoComponent {

  @Output() savePiatto = new EventEmitter<Partial<Piatto>>();


  onSave(form: NgForm) {
    console.log(form);
    this.savePiatto.emit(form.value);
  }
}

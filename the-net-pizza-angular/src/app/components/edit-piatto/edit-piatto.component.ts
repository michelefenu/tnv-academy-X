import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Piatto } from 'src/app/models/piatto';

@Component({
  selector: 'app-edit-piatto',
  templateUrl: './edit-piatto.component.html',
  styleUrls: ['./edit-piatto.component.scss']
})
export class EditPiattoComponent {

  @Output() savePiatto = new EventEmitter<Partial<Piatto>>();
  @Output() editPiatto = new EventEmitter<Partial<Piatto>>();
  @Input() piatto: Partial<Piatto> = {};

  onSave() {
    this.savePiatto.emit(this.piatto);
  }

  onEdit() {
    this.editPiatto.emit(this.piatto);
  }
}

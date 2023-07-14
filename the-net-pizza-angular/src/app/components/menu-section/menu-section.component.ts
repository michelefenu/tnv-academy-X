import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Piatto } from 'src/app/models/piatto';

@Component({
  selector: 'app-menu-section',
  templateUrl: './menu-section.component.html',
  styleUrls: ['./menu-section.component.scss']
})
export class MenuSectionComponent {

  @Input() title: string = '';
  @Input() piatti: Piatto[] = [];

  @Output() itemClicked = new EventEmitter<number>();
  @Output() delete = new EventEmitter<number>();
  @Output() edit = new EventEmitter<Piatto>();

  onClicked(id: number) {
    this.itemClicked.emit(id);
  }

  onDelete(id: number) {
    this.delete.emit(id);
  }

  onEdit(piatto: Piatto) {
    this.edit.emit(piatto);
  }
}

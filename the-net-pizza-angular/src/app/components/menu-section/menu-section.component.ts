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

  onClicked(id: number) {
    this.itemClicked.emit(id);
  }
}

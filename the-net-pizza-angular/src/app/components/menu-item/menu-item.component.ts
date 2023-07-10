import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Piatto } from 'src/app/models/piatto';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss']
})
export class MenuItemComponent {

  //@Input() piatto!: Piatto;
  @Input() piatto: Piatto | undefined;
  //@Input() piatto: Partial<Piatto> = {};

  @Output() clicked = new EventEmitter<number>();

  onClick() {
    this.clicked.emit(this.piatto?.id);
  }
}

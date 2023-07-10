import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-menu-detail',
  templateUrl: './menu-detail.component.html',
  styleUrls: ['./menu-detail.component.scss']
})
export class MenuDetailComponent {
  piattoId: number;

  constructor(private activatedRoute: ActivatedRoute) {
    this.piattoId = this.activatedRoute.snapshot.params['piattoId'];
  }

}

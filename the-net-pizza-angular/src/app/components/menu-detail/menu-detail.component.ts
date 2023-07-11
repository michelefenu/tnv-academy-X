import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Piatto } from 'src/app/models/piatto';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-menu-detail',
  templateUrl: './menu-detail.component.html',
  styleUrls: ['./menu-detail.component.scss']
})
export class MenuDetailComponent implements OnInit {
  piattoId: number;

  constructor(private activatedRoute: ActivatedRoute, public apiService: ApiService) {
    this.piattoId = this.activatedRoute.snapshot.params['piattoId'];
  }

  ngOnInit(): void {
    this.apiService.setActivePiatto(this.piattoId);
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Piatto } from 'src/app/models/piatto';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  title = 'I nostri piatti';

  private menu: Piatto[] = [];

  antipasti: Piatto[] = [];
  primi: Piatto[] = [];
  dolci: Piatto[] = [];

  constructor(private router: Router, private http: HttpClient, private apiService: ApiService) {
  }

  ngOnInit(): void {
    /*  fetch(`http://my-json-server.typicode.com/michelefenu/tnv-academy-X/piatti`)
       .then(res => res.json())
       .then((res) => {
 
         this.menu = res;
 
         this.antipasti = this.menu.filter(x => x.category === 'antipasti');
         this.primi = this.menu.filter(x => x.category === 'primi');
         this.dolci = this.menu.filter(x => x.category === 'dolci');
       }) */

       this.apiService.activePiatto = null;

    this.apiService.getPiatti()
      .subscribe({
        next: (response) => {
          this.menu = response;

          this.antipasti = this.menu.filter(x => x.category === 'antipasti');
          this.primi = this.menu.filter(x => x.category === 'primi');
          this.dolci = this.menu.filter(x => x.category === 'dolci');
        },
       /*  error: (error) => console.log('ERRORE!', error),
        complete: () => console.log('Complete!') */
      })
  }

  onItemClicked(id: number) {
    this.router.navigateByUrl(`/menu/${id}`);
  }
}

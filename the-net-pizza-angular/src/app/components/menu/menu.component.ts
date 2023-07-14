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

  sections: Piatto[][] = [];

  piatto: Partial<Piatto> = {};

  constructor(private router: Router, private http: HttpClient, private apiService: ApiService) {
  }

  ngOnInit(): void {
    this.apiService.activePiatto = null;
    this.loadData();
  }

  onItemClicked(id: number) {
    this.router.navigateByUrl(`/menu/${id}`);
  }

  onDelete(id: number) {
    this.apiService.deletePiatto(id).subscribe({
      next: () => {
        console.log('Piatto Eliminato');
        this.loadData();
      }
    })
  }

  onEdit(piatto: Piatto) {
    this.piatto = {...piatto};
  }


  onEditPiatto(piatto: Partial<Piatto>) {
    this.apiService.editPiatto(piatto).subscribe({
      next: () => {
        console.log('Piatto Modificato con Successo');
        this.piatto = {};
        this.loadData();
      }
    });
  }

  onSavePiatto(piatto: Partial<Piatto>) {
    this.apiService.addPiatto(piatto).subscribe({
      next: () => {
        console.log('Piatto Aggiunto con Successo');
        this.piatto = {};
        this.loadData();
      }
    });
  }

  private loadData() {
    this.apiService.getPiatti().subscribe({
          next: (response) => {
            this.menu = response;
  
            const categories = [...new Set(this.menu.map(x => x.category))];
  
            this.sections = [];
            for (let category of categories) {
              this.sections.push(this.menu.filter(x => x.category === category))
            }
  
          }
        })
  }
}

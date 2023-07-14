import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { debounceTime } from 'rxjs';
import { Piatto } from 'src/app/models/piatto';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnChanges, OnInit {
  title = 'I nostri piatti';

  @Input() menu: Piatto[] = [];

  filteredPiatti: Piatto[] = [];

  sections: Piatto[][] = [];

  piatto: Partial<Piatto> = {};

  search = new FormControl('');

  constructor(private router: Router, private apiService: ApiService) {
  }

  ngOnInit(): void {
    this.search.valueChanges.pipe(
      debounceTime(1000)
    ).subscribe({
      next: (data) => {
        this.filteredPiatti = this.menu.filter(x => x.title.toLowerCase().includes(data?.toLowerCase() || ''));
        this.updateSections();
      },
      complete: () => console.log('complete!')
    })
  }

  ngOnChanges(): void {
    this.filteredPiatti = this.menu;
    this.updateSections();
  }

  private updateSections() {
    const categories = [...new Set(this.filteredPiatti.map(x => x.category))];

    this.sections = [];
    for (let category of categories) {
      this.sections.push(this.filteredPiatti.filter(x => x.category === category))
    }
  }

  onItemClicked(id: number) {
    this.router.navigateByUrl(`/menu/${id}`);
  }

  onDelete(id: number) {
    this.apiService.deletePiatto(id);
  }

  onEdit(piatto: Piatto) {
    this.piatto = { ...piatto };
  }

  onEditPiatto(piatto: Partial<Piatto>) {
    this.apiService.editPiatto(piatto);
  }

  onSavePiatto(piatto: Partial<Piatto>) {
    this.apiService.addPiatto(piatto);
  }
}

import { Injectable } from '@angular/core';
import { Piatto } from '../models/piatto';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  API_ROOT = 'http://localhost:1234/api';

  activePiatto: Piatto | undefined | null;
  menu: Piatto[] = [];
  
  constructor(private http: HttpClient) { 
    this.getPiatti();
  }

  setActivePiatto(id: number) {
    this.http.get<Piatto>(`${this.API_ROOT}/piatti/${id}`)
      .subscribe({
        next: (response) => this.activePiatto = response
      })
  }

  getPiatti() {
    this.http.get<Piatto[]>(`${this.API_ROOT}/piatti`).subscribe({
      next: (response) => this.menu = response
    });
  }

  addPiatto(piatto: Partial<Piatto>) {
    this.http.post<any>(`${this.API_ROOT}/piatti`, piatto).subscribe({
      next: (response) => this.menu = [...this.menu, response.data]
    });
  }

  editPiatto(piatto: Partial<Piatto>) {
    return this.http.patch<any>(`${this.API_ROOT}/piatti/${piatto.id}`, piatto).subscribe({
      next: () => this.menu = this.menu.map(x => x.id === piatto.id ? piatto as Piatto : x)
    });
  }

  deletePiatto(id: number) {
    return this.http.delete(`${this.API_ROOT}/piatti/${id}`).subscribe({
      next: () => this.menu = this.menu.filter(x => x.id !== id)
    });
  }
}

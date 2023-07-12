import { Injectable } from '@angular/core';
import { Piatto } from '../models/piatto';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  API_ROOT = 'http://localhost:1234/api';

  activePiatto: Piatto | undefined | null;
  
  constructor(private http: HttpClient) { }

  setActivePiatto(id: number) {
    this.http.get<Piatto>(`${this.API_ROOT}/piatti/${id}`)
      .subscribe({
        next: (response) => this.activePiatto = response
      })
  }

  getPiatti() {
    return this.http.get<Piatto[]>(`${this.API_ROOT}/piatti`);
  }

  addPiatto(piatto: Partial<Piatto>) {
    return this.http.post<Piatto>(`${this.API_ROOT}/piatti`, piatto);
  }

  deletePiatto(id: number) {
    return this.http.delete(`${this.API_ROOT}/piatti/${id}`);
  }
}

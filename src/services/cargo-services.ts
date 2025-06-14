import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cargo } from '../model/cargo-model';

@Injectable({ providedIn: 'root' })
export class CargoService {
  private apiUrl = 'http://localhost:8000/api/cargos'; // Ajusta la URL si es necesario

  constructor(private http: HttpClient) {}

  getCargos(): Observable<Cargo[]> {
    return this.http.get<Cargo[]>(this.apiUrl);
  }
}

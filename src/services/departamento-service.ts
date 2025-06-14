import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Departamento } from '../model/departamento-model';

@Injectable({ providedIn: 'root' })
export class DepartamentoService {
  private apiUrl = 'http://localhost:8000/api/departamentos'; // Ajusta la URL si es necesario

  constructor(private http: HttpClient) {}

  getDepartamentos(): Observable<Departamento[]> {
    return this.http.get<Departamento[]>(this.apiUrl);
  }
}

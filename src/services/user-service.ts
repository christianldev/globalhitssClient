import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../model/user-model';

@Injectable({ providedIn: 'root' })
export class UserService {
  private apiUrl = 'http://localhost:8000/api/users'; // Ajusta la URL según tu backend

  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl);
  }
}

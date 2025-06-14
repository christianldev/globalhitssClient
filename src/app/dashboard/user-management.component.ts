import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { UserService } from '../../services/user-service';
import { User } from '../../model/user-model';

@Component({
  selector: 'app-user-management',
  standalone: true,
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.scss'],
  imports: [MatTableModule, MatIconModule, MatButtonModule],
})
export class UserManagementComponent {
  users: any[] = []; // Array to hold user data

  displayedColumns = [
    'Usuario',
    'Nombres',
    'Apellidos',
    'Departamento',
    'Cargo',
    'Email',
    'Acciones',
  ];

  loading = false;
  error = '';

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    this.loading = true;
    this.userService.getUsers().subscribe({
      next: (data) => {
        console.log('Usuarios cargados:', data);
        this.users = data;
        this.loading = false;
      },
      error: () => {
        this.error = 'Error al cargar usuarios';
        this.loading = false;
      },
    });
  }

  onEdit(user: User) {
    // lógica para editar
  }

  onDelete(user: User) {
    // lógica para eliminar
  }
}

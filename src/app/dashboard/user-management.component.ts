import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { UserService } from '../../services/user-service';
import { User } from '../../model/user-model';
import { NavUserManagementComponent } from '../nav-user-management/nav-user-management.component';
import { Departamento } from '../../model/departamento-model';
import { Cargo } from '../../model/cargo-model';
import { DepartamentoService } from '../../services/departamento-service';
import { CargoService } from '../../services/cargo-services';

@Component({
  selector: 'app-user-management',
  standalone: true,
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.scss'],
  imports: [
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    NavUserManagementComponent,
  ],
})
export class UserManagementComponent {
  users: any[] = []; // Array to hold user data
  departamentos: Departamento[] = [];
  cargos: Cargo[] = [];

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

  constructor(
    private userService: UserService,
    private departamentoService: DepartamentoService,
    private cargoService: CargoService
  ) {}

  ngOnInit(): void {
    this.loadUsers();
    this.departamentoService.getDepartamentos().subscribe({
      next: (data) => (this.departamentos = data),
      error: () => (this.departamentos = []),
    });
    this.cargoService.getCargos().subscribe({
      next: (data) => (this.cargos = data),
      error: () => (this.cargos = []),
    });
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

  getNombreDepartamento(id: number): string {
    const dep = this.departamentos.find((d) => d.id === id);
    console.log('Departamento encontrado:', dep);
    return dep ? dep.nombre : '';
  }

  getNombreCargo(id: number): string {
    const cargo = this.cargos.find((c) => c.id === id);
    console.log('Cargo encontrado:', cargo);
    return cargo ? cargo.nombre : '';
  }

  onEdit(user: User) {
    // lógica para editar
  }

  onDelete(user: User) {
    // lógica para eliminar
  }
}

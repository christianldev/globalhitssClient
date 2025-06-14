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
import { UserEditModalComponent } from '../user-edit-modal/user-edit-modal.component';
import { MatDialog } from '@angular/material/dialog';

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
  usuariosOriginales: User[] = [];

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
    private cargoService: CargoService,
    private dialog: MatDialog
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
        this.usuariosOriginales = data;
        this.users = data;
        this.loading = false;
      },
      error: () => {
        this.error = 'Error al cargar usuarios';
        this.usuariosOriginales = [];
        this.loading = false;
        this.users = [];
      },
    });
  }

  aplicarFiltro(filtro: { departamento: number | null; cargo: number | null }) {
    this.users = this.usuariosOriginales.filter(
      (user) =>
        (filtro.departamento == null ||
          user.idDepartamento === filtro.departamento) &&
        (filtro.cargo == null || user.idCargo === filtro.cargo)
    );
  }

  getNombreDepartamento(id: number): string {
    const dep = this.departamentos.find((d) => d.id === id);

    return dep ? dep.nombre : '';
  }

  getNombreCargo(id: number): string {
    const cargo = this.cargos.find((c) => c.id === id);

    return cargo ? cargo.nombre : '';
  }

  openEditModal(user: User) {
    this.dialog
      .open(UserEditModalComponent, {
        width: '900px', // O el valor que prefieras, por ejemplo '80vw'
        maxWidth: '95vw', // Opcional, para evitar que se salga de la pantalla
        data: {
          user,
          departamentos: this.departamentos,
          cargos: this.cargos,
        },
      })
      .afterClosed()
      .subscribe((result) => {
        if (result) {
          // Llama a tu servicio para actualizar el usuario
          this.userService.updateUser(result.id, result).subscribe(() => {
            this.loadUsers();
          });
        }
      });
  }

  deleteUser(user: User) {
    if (confirm(`¿Seguro que deseas eliminar al usuario "${user.usuario}"?`)) {
      this.userService.deleteUser(user.id).subscribe({
        next: () => this.loadUsers(), // Recarga la lista tras eliminar
        error: () => {
          // Opcional: muestra un mensaje de error
        },
      });
    }
  }
}

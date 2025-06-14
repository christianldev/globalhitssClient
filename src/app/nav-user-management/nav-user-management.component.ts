import { Component, EventEmitter, Output } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { DepartamentoService } from '../../services/departamento-service';
import { Departamento } from '../../model/departamento-model';
import { CommonModule } from '@angular/common';
import { Cargo } from '../../model/cargo-model';
import { CargoService } from '../../services/cargo-services';
import { MatDialog } from '@angular/material/dialog';
import { UserRegisterModalComponent } from '../user-register-modal/user-register-modal.component';
import { User } from '../../model/user-model';
import { UserService } from '../../services/user-service';

@Component({
  selector: 'app-nav-user-management',
  standalone: true,
  imports: [MatFormFieldModule, MatSelectModule, MatButtonModule, CommonModule],
  templateUrl: './nav-user-management.component.html',
  styleUrl: './nav-user-management.component.scss',
})
export class NavUserManagementComponent {
  departamentos: Departamento[] = [];
  selectedDepartamento: number | null = null;
  cargos: Cargo[] = [];
  users: User[] = [];
  selectedCargo: number | null = null;
  @Output() usuarioCreado = new EventEmitter<void>();

  constructor(
    private departamentoService: DepartamentoService,
    private cargoService: CargoService,
    private userService: UserService,
    private dialog: MatDialog
  ) {}

  openRegisterModal() {
    this.dialog
      .open(UserRegisterModalComponent, {
        width: '900px', // O el valor que prefieras, por ejemplo '80vw'
        maxWidth: '95vw', // Opcional, para evitar que se salga de la pantalla
        data: {
          departamentos: this.departamentos, // pásale los departamentos
          cargos: this.cargos, // pásale los cargos
        },
      })
      .afterClosed()
      .subscribe((result) => {
        if (result) {
          this.usuarioCreado.emit();
        }
      });
  }

  ngOnInit(): void {
    this.departamentoService.getDepartamentos().subscribe({
      next: (data) => (this.departamentos = data),
      error: () => (this.departamentos = []),
    });

    this.cargoService.getCargos().subscribe({
      next: (data) => (this.cargos = data),
      error: () => (this.cargos = []),
    });
  }
}

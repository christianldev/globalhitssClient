import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { DepartamentoService } from '../../services/departamento-service';
import { Departamento } from '../../model/departamento-model';
import { CommonModule } from '@angular/common';

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

  constructor(private departamentoService: DepartamentoService) {}

  ngOnInit(): void {
    this.departamentoService.getDepartamentos().subscribe({
      next: (data) => (this.departamentos = data),
      error: () => (this.departamentos = []),
    });
  }
}

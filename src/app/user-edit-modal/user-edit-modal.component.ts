import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  MatDialogRef,
  MAT_DIALOG_DATA,
  MatDialogModule,
} from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Departamento } from '../../model/departamento-model';
import { User } from '../../model/user-model';
import { Cargo } from '../../model/cargo-model';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-edit-modal',
  standalone: true,
  templateUrl: './user-edit-modal.component.html',
  styleUrls: ['./user-edit-modal.component.scss'],
  imports: [
    CommonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule,
    ReactiveFormsModule,
  ],
})
export class UserEditModalComponent {
  form: FormGroup;
  departamentos: Departamento[] = [];
  cargos: Cargo[] = [];

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<UserEditModalComponent>,
    @Inject(MAT_DIALOG_DATA)
    public data: {
      user: User;
      departamentos: Departamento[];
      cargos: Cargo[];
    }
  ) {
    this.departamentos = data.departamentos || [];
    this.cargos = data.cargos || [];
    this.form = this.fb.group({
      id: [data.user.id],
      idDepartamento: [data.user.idDepartamento, Validators.required],
      idCargo: [data.user.idCargo, Validators.required],
      usuario: [data.user.usuario, Validators.required],
      email: [data.user.email, [Validators.required, Validators.email]],
      primerNombre: [data.user.primerNombre, Validators.required],
      segundoNombre: [data.user.segundoNombre],
      primerApellido: [data.user.primerApellido, Validators.required],
      segundoApellido: [data.user.segundoApellido],
    });
  }

  onSubmit() {
    if (this.form.valid) {
      this.dialogRef.close(this.form.value);
    }
  }

  onCancel() {
    this.dialogRef.close();
  }
}

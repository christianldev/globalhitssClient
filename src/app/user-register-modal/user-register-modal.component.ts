import { Component, Inject } from '@angular/core';
import {
  MatDialogRef,
  MAT_DIALOG_DATA,
  MatDialogModule,
} from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import {
  FormsModule,
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { UserService } from '../../services/user-service';

@Component({
  selector: 'app-user-register-modal',
  standalone: true,
  templateUrl: './user-register-modal.component.html',
  styleUrls: ['./user-register-modal.component.scss'],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule,
  ],
})
export class UserRegisterModalComponent {
  form: FormGroup;

  departamentos: any[] = [];
  cargos: any[] = [];

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    public dialogRef: MatDialogRef<UserRegisterModalComponent>,

    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.departamentos = data.departamentos || [];
    this.cargos = data.cargos || [];

    this.form = this.fb.group({
      idDepartamento: [null, Validators.required],
      idCargo: [null, Validators.required],
      usuario: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      primerNombre: ['', Validators.required],
      segundoNombre: [''],
      primerApellido: ['', Validators.required],
      segundoApellido: [''],
    });
  }

  onSubmit() {
    if (this.form.valid) {
      this.userService.addUser(this.form.value).subscribe({
        next: (user) => {
          this.dialogRef.close(user);
        },
        error: (err) => {
          this.dialogRef.close({
            error:
              'No se pudo crear el usuario. Por favor, inténtelo de nuevo más tarde.',
          });
        },
      });
    }
  }

  onCancel() {
    this.dialogRef.close();
  }
}

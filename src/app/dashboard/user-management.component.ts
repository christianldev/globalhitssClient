import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

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

  // constructor(private userService: UserService) {
  //   this.loadUsers();
  // }

  // loadUsers(): void {
  //   this.userService.getUsers().subscribe((data) => {
  //     this.users = data;
  //   });
  // }

  // addUser(user: any): void {
  //   this.userService.addUser(user).subscribe(() => {
  //     this.loadUsers(); // Reload users after adding a new one
  //   });
  // }
}

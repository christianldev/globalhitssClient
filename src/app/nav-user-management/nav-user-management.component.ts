import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-nav-user-management',
  standalone: true,
  imports: [MatFormFieldModule, MatSelectModule, MatButtonModule],
  templateUrl: './nav-user-management.component.html',
  styleUrl: './nav-user-management.component.scss',
})
export class NavUserManagementComponent {}

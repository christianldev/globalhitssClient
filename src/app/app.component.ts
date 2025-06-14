import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserManagementComponent } from './dashboard/user-management.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UserManagementComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'globalhitssfront';
}

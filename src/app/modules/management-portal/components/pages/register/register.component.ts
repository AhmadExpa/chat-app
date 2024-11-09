import { Component } from '@angular/core';
import { AuthService } from '../../../../../shared/services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  username = '';
  email = '';
  password = '';

  constructor(private authService: AuthService, private router: Router) { }

  signup() {
    this.authService.signup({ username: this.username, email: this.email, password: this.password }).subscribe();
  }
}

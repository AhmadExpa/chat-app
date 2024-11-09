import { Component } from '@angular/core';
import { AuthService } from '../../../../../shared/services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email = '';
  password = '';

  constructor(private authService: AuthService, private router: Router) { }

  login() {
    this.authService.login({ email: this.email, password: this.password }).subscribe((res: any) => {
      this.authService.setToken(res.token);
      this.router.navigate(['/chat-portal']);
    });
  }
}

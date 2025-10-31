import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-screen',
  templateUrl: './login-screen.component.html',
  styleUrls: ['./login-screen.component.scss']
})
export class LoginScreenComponent {
  username: string = '';
  password: string = '';
  type: string = 'password';

  constructor(private router: Router) {}

  togglePassword(): void {
    this.type = this.type === 'password' ? 'text' : 'password';
  }

  login(): void {
    console.log('Iniciando sesión con:', this.username);
  }

  goToRegister(): void {
    this.router.navigate(['/register']);
  }
}

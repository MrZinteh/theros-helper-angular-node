import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent {

  loginForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  get username() { return this.loginForm.get('username') }

  get password() { return this.loginForm.get('password') }

  onSubmit(): void {
    if (this.loginForm.valid) {
      this.authService.login(this.username!.value, this.password!.value).subscribe({
        complete: () =>  {
          this.router.navigate(['NameGenerator']);
        }
      });
    }
  }

}

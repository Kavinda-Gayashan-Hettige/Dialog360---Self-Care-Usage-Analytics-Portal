import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <div class="d-flex justify-content-center align-items-center" style="min-height: 60vh;">
      <div class="card shadow-sm border-0 p-4 w-100" style="max-width: 400px;">
        <h3 class="h4 fw-bold mb-4 text-dialog-red text-center">Connect with Dialog ID</h3>
        <form [formGroup]="loginForm" (ngSubmit)="onSubmit()">
          <div class="mb-3">
            <label class="form-label fw-medium text-secondary">Mobile Number</label>
            <input type="text" formControlName="mobile" class="form-control" placeholder="077XXXXXXX">
          </div>
          <div class="mb-4">
            <label class="form-label fw-medium text-secondary">Password / PIN</label>
            <input type="password" formControlName="password" class="form-control" placeholder="••••••••">
          </div>
          <button type="submit" class="btn btn-dialog w-100" [disabled]="loginForm.invalid">LOGIN</button>
        </form>
      </div>
    </div>
  `
})
export class LoginComponent {
  private fb = inject(FormBuilder);
  private router = inject(Router);
  private route = inject(ActivatedRoute);

  loginForm = this.fb.group({
    mobile: ['', Validators.required],
    password: ['', Validators.required]
  });

  onSubmit() {
    if (this.loginForm.valid) {
      // Mock Login: Saving a dummy token to pass the CanActivate guard
      localStorage.setItem('jwt_token', 'dummy-token');
      const returnUrl = this.route.snapshot.queryParamMap.get('returnUrl');
      this.router.navigateByUrl(returnUrl || '/dashboard');
    }
  }
}
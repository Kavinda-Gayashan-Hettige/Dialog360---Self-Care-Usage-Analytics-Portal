import { Component } from '@angular/core';

@Component({
  selector: 'app-signup',
  standalone: true,
  template: `
    <div class="d-flex justify-content-center align-items-center" style="min-height: 60vh;">
      <div class="card shadow-sm border-0 p-4 w-100" style="max-width: 400px;">
        <h3 class="h4 fw-bold mb-3 text-dialog-red text-center">Create Dialog ID</h3>
        <p class="text-muted small text-center mb-4">When you create a Dialog ID you can have your connections in one place.</p>
        <button class="btn btn-dialog w-100">REGISTER NOW</button>
      </div>
    </div>
  `
})
export class SignupComponent {}
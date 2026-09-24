import { Component } from '@angular/core';

@Component({
  selector: 'app-billing',
  standalone: true,
  template: `
    <div class="container py-4">
      <h2 class="h3 fw-bold mb-4 text-dialog-red">Billing & Packages</h2>
      <div class="alert alert-secondary">
        Billing and Package Activation module (Ready for PayHere mock integration).
      </div>
    </div>
  `
})
export class BillingComponent {}
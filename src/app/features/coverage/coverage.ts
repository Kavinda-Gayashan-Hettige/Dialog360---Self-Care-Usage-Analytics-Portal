import { Component } from '@angular/core';

@Component({
  selector: 'app-coverage',
  standalone: true,
  template: `
    <div class="container py-4">
      <h2 class="h3 fw-bold mb-4 text-dialog-red">Network Coverage Map</h2>
      <div class="bg-light border rounded d-flex justify-content-center align-items-center" style="height: 400px;">
        <p class="text-muted fw-medium">Leaflet.js Map will render here</p>
      </div>
    </div>
  `
})
export class CoverageComponent {}
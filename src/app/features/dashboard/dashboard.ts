import { Component, signal, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="container py-4">
      <h2 class="h3 fw-bold mb-4 text-dialog-red">Dialog360 Usage Dashboard</h2>
      <div class="card shadow-sm border-0 border-start border-danger border-4" style="max-width: 400px;">
        <div class="card-body">
          <h3 class="h6 fw-semibold text-secondary">Anytime Data Remaining</h3>
          <p class="display-6 fw-bold text-dark mt-2">{{ dataUsage() }} MB</p>
          <p class="text-success small mt-1 mb-0">Live Updating (SSE simulated)</p>
        </div>
      </div>
    </div>
  `
})
export class DashboardComponent implements OnInit {
  dataUsage = signal<number>(15420);

  ngOnInit() {
    setInterval(() => {
      this.dataUsage.update(current => {
        const usage = Math.floor(Math.random() * 5);
        return current > 0 ? current - usage : 0;
      });
    }, 3000);
  }
}
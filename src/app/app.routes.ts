import { Routes } from '@angular/router'; 

export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () => import('./features/auth/login/login').then(m => m.LoginComponent)
  },
  {
    path: 'signup',
    loadComponent: () => import('./features/auth/signup/signup').then(m => m.SignupComponent)
  },
  { 
    path: 'dashboard', 
    loadComponent: () => import('./features/dashboard/dashboard').then(m => m.DashboardComponent)
  },
  { 
    path: 'billing', 
    loadComponent: () => import('./features/billing/billing').then(m => m.BillingComponent)
  },
  { 
    path: 'coverage', 
    loadComponent: () => import('./features/coverage/coverage').then(m => m.CoverageComponent) 
  },
  { 
    path: 'tickets', 
    loadComponent: () => import('./features/tickets/tickets').then(m => m.TicketsComponent) 
  },
  
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', redirectTo: 'login' }
];
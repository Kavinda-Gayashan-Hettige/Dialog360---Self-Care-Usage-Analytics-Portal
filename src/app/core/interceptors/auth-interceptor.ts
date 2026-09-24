import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { AuthService } from '../services/auth';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(AuthService);
  const token = localStorage.getItem('jwt_token');

  // Clone the request to add the authentication header.
  const authReq = token ? req.clone({
    setHeaders: { Authorization: `Bearer ${token}` }
  }) : req;

  return next(authReq).pipe(
    catchError((error) => {
      if (error.status === 401) {
        // Trigger silent token refresh logic here
        console.warn('Unauthorized request - triggering token refresh');
      }
      return throwError(() => error);
    })
  );
};
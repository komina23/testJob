import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router, private AuthService:AuthService) {}

  canActivate(): boolean {
    if (this.AuthService.isLoggedIn) {
      return true; // Allow access if logged in
    } else {
      this.router.navigate(['/login']); // Redirect to login if not logged in
      return false;
    }
  }

  

}
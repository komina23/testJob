import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) { }
  signIn(name:string, pass:string){

  }

  doLogout() {
    let removeToken = localStorage.removeItem('login');
    if (removeToken == null) {
      this.router.navigate(['login']);
    }
  }
  get isLoggedIn(): boolean {
    const authToken = localStorage.getItem('login');
    return authToken !== null; 
  }

  setItem(key: string, value: any) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  getItem(key: string) {
    return JSON.parse(localStorage.getItem(key) || '{}');
  }

}

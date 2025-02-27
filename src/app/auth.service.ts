import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  isLoggedIn(): boolean {
    return localStorage.getItem('authToken') !== null;  // You can use any authentication method
  }

  // Set login status and user data (for example, storing an auth token)
  login(user: any): void {
    localStorage.setItem('authToken', user.email);  // Store a token or some identifier for the user
  }

  // Log the user out
  logout(): void {
    localStorage.removeItem('authToken');
  }
}

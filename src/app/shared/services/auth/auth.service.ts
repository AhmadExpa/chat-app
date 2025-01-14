import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthService {
    private apiUrl = 'http://localhost:5000/api/auth';

    constructor(private http: HttpClient, private router: Router) {}

    login(credentials: any) {
        return this.http.post(`${this.apiUrl}/login`, credentials);
    }

    signup(user: any) {
        return this.http.post(`${this.apiUrl}/register`, user);
    }

    setToken(token: string) {
        localStorage.setItem('token', token);
    }

    getToken() {
        return localStorage.getItem('token');
    }

    isAuthenticated(): boolean {
        return !!this.getToken();
    }

    logout() {
        localStorage.removeItem('token');
        this.router.navigate(['/login']);
    }
}

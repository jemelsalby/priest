import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly TEMP_EMAIL = 'test@example.com';
  private readonly TEMP_PASSWORD = 'password';

  authenticate(email: string, password: string): boolean {
    return email === this.TEMP_EMAIL && password === this.TEMP_PASSWORD;
  }
}

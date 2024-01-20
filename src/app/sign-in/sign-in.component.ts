import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
})
export class SignInComponent implements OnInit {
  email: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    // Make sure to wait for the DOM to be ready before accessing elements
    document.addEventListener('DOMContentLoaded', () => {
      const signUpButton = document.getElementById('signUp');
      const signInButton = document.getElementById('signIn');
      const container = document.getElementById('container');

      if (signUpButton && signInButton && container) {
        signUpButton.addEventListener('click', () => {
          container.classList.add("right-panel-active");
        });

        signInButton.addEventListener('click', () => {
          container.classList.remove("right-panel-active");
        });
      }
    });
  }

  signIn(): void {
    if (this.authService.authenticate(this.email, this.password)) {
      // Authentication successful, navigate to another page
      this.router.navigate(['/dashboard']); // Replace 'dashboard' with your desired route
    } else {
      // Authentication failed, handle accordingly (show error message, etc.)
      console.log('Authentication failed');
    }
  }
}
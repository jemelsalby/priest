import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
})
export class SignInComponent implements OnInit {

  isSignIn = true;

  constructor(private authService: AuthService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {}

  signIn(signInForm: NgForm): void {

    if (this.authService.authenticate(signInForm.value.email, signInForm.value.password)) {
      // Authentication successful, navigate to another page
      this.router.navigate(['/dashboard']); // Replace 'dashboard' with your desired route
    } else {
      // Authentication failed, handle accordingly (show error message, etc.)
      console.log('Authentication failed');
    }
  }
}
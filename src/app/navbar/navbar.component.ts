import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from '../login/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit, OnDestroy {
  isAuthenticated: boolean = false;
  isAdmin: boolean = false;
  subscription?: Subscription;
  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.subscription = this.authService.user.subscribe((user) => {
      this.isAuthenticated = !!user;
      this.isAdmin = !!user && user.email === 'admin@csachanda.com';
    });
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  onLogout() {
    this.authService.logout();
  }
}

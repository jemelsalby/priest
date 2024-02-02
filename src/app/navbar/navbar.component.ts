import { Component, OnInit } from '@angular/core';
import { AuthService } from '../login/auth.service';
import { User } from '../login/user.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isAuthenticated: boolean = false;
  
  constructor(private authService:AuthService) { }

  ngOnInit(): void {

    this.authService.user.subscribe(
      user => this.isAuthenticated = !!user
    )
  }

  onLogout(){

    this.authService.logout();
  }

}

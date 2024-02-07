import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { School, SchoolsService } from './institutions.service';
import { AuthService } from '../login/auth.service';
import { Subscription, take, tap } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-institutions',
  templateUrl: './institutions.component.html',
  styleUrls: ['./institutions.component.css'],
})
export class InstitutionsComponent implements OnInit, OnDestroy {

  isAdmin = false;
  subscription?: Subscription;

  constructor(private schoolsService: SchoolsService, private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.subscription = this.authService.user.pipe(take(1),
    tap((user)=>{
      this.isAdmin = !!user && user.email === 'admin@csachanda.com' 
    })
    ).subscribe();
  }

  ngOnDestroy(): void {
      this.subscription?.unsubscribe();
  }
  navigateToAnotherPage() {
    this.router.navigate(['schools/create']); 
  }
}

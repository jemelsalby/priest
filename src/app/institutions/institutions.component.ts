import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { Institute, InstitutionsService } from './institutions.service';
import { AuthService } from '../login/auth.service';
import { Subscription, take, tap } from 'rxjs';

@Component({
  selector: 'app-institutions',
  templateUrl: './institutions.component.html',
  styleUrls: ['./institutions.component.css'],
})
export class InstitutionsComponent implements OnInit, OnDestroy {

  institutions: Institute[] | undefined;
  isAdmin = false;
  subscription?: Subscription;

  constructor(private institutionsService: InstitutionsService, private authService: AuthService) { }

  ngOnInit(): void {
    this.institutions = this.institutionsService.getInstitutions();
    this.subscription = this.authService.user.pipe(take(1),
    tap((user)=>{
      this.isAdmin = !!user && user.email === 'admin@csachanda.com' 
    })
    ).subscribe();
  }

  ngOnDestroy(): void {
      this.subscription?.unsubscribe();
  }

}

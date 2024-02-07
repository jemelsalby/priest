import { Component, OnInit } from '@angular/core';
import { School, SchoolsService } from '../institutions.service';
import { AuthService } from 'src/app/login/auth.service';
import { Subscription, take, tap } from 'rxjs';

@Component({
  selector: 'app-institute-list',
  templateUrl: './institute-list.component.html',
  styleUrls: ['./institute-list.component.css'],
})
export class InstituteListComponent implements OnInit {
  schools: School[] | undefined;
  isAdmin = false;
  subscription?: Subscription;

  constructor(
    private schoolsService: SchoolsService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.schoolsService.getSchools().subscribe({
      next: (value) => {
        this.schools = value;
      },
    });

    this.subscription = this.authService.user
      .pipe(
        take(1),
        tap((user) => {
          this.isAdmin = !!user && user.email === 'admin@csachanda.com';
        })
      )
      .subscribe();
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  onDeleteSchool(index: string | undefined) {
    if (index) {
      this.schoolsService.deleteSchool(index).subscribe({
        next: (value) => {
          alert('Deleted school successfully');
          this.ngOnInit();
        },
        error: (err) => {
          alert(err);
        },
      });
    }
  }
}

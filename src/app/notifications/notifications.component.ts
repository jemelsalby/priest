import { Component, OnInit } from '@angular/core';

import { Subscription, take, tap } from 'rxjs';
import { AuthService } from '../login/auth.service';
import { AppNotification, NotificationService } from './notification.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {

  isAdmin = false;
  notifications?: AppNotification[];
  subscription?: Subscription;

  constructor(private notiService: NotificationService, private authService: AuthService) { }

  ngOnInit(): void {

    this.subscription = this.authService.user.pipe(take(1),
    tap((user)=>{
      this.isAdmin = !!user && user.email === 'admin@csachanda.com' 
    })
    ).subscribe();
    this.notiService.getNotification().subscribe(resp => this.notifications = resp);

  }

  ngOnDestroy(): void {
      this.subscription?.unsubscribe();
  }

}

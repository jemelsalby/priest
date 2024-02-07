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
  isLoading = false;
  notifications?: AppNotification[];
  subscription?: Subscription;

  constructor(private notiService: NotificationService, private authService: AuthService) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.subscription = this.authService.user.pipe(take(1),
    tap((user)=>{
      this.isAdmin = !!user && user.email === 'admin@csachanda.com' 
    })
    ).subscribe();
    this.notiService.getNotification().subscribe(resp => {
      this.notifications = resp
      this.isLoading = false
    });

  }

  onDeleteNoti(index?: string){

    if(index){
      this.notiService.deleteNotification(index).subscribe({
        next: (value) => {
          alert('Deleted Notification sucessfully');
          this.ngOnInit()
        },
        error: (err) => {
          alert(err);
        },
      });
    }
  }

  ngOnDestroy(): void {
      this.subscription?.unsubscribe();
  }

}

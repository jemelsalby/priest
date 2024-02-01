import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {

  notifications: {title: string, image: string, desc: string}[] = [
    { title: '25 th jubillee celebration', image: 'assets/images/25.png', desc: ''},
    { title: '25 th jubillee celebration', image: 'assets/images/25.png', desc: ''},
    { title: '25 th jubillee celebration', image: 'assets/images/25.png', desc: 'Lets celebrate'},
    { title: '25 th jubillee celebration', image: 'assets/images/25.png', desc: ''},
  ]

  constructor() { }

  ngOnInit(): void {
  }


}

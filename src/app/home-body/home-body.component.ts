import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-home-body',
  templateUrl: './home-body.component.html',
  styleUrls: ['./home-body.component.css'],
  // encapsulation: ViewEncapsulation.None
})
export class HomeBodyComponent implements OnInit {

  bodyItems = [
    'Priest Directory',
    'Notification',
    'Parish List', 
    'Family Directory', 
    'Family Groups', 
    'Family Card', 
    'Help and Advice',
    'Guidelines',
    'Teachers',
    'Downloads',
    'Institutions',
    'DioceseCalendar'
  ]

  constructor() { }

  ngOnInit(): void {
  }

}

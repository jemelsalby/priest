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
    'About', 
    'Family Directory', 
    'Gallery', 
    'Help and Advice',
    'Institutions',
    'DioceseCalendar'
  ]

  constructor() { }

  ngOnInit(): void {
  }

}

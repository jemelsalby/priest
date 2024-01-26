import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-home-body',
  templateUrl: './home-body.component.html',
  styleUrls: ['./home-body.component.css'],
  // encapsulation: ViewEncapsulation.None
})
export class HomeBodyComponent implements OnInit {

  bodyItems = [
    {name: 'Priest Directory', link: ''},
    {name: 'About', link: ''}, 
    {name: 'Family Directory', link: ''}, 
    {name: 'Gallery', link: ''}, 
    {name: 'Help and Advice', link: ''},
    {name: 'Institutions', link: 'institutions'},
    {name: 'DioceseCalendar', link: ''},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}

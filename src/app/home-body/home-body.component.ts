import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-home-body',
  templateUrl: './home-body.component.html',
  styleUrls: ['./home-body.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HomeBodyComponent implements OnInit {

  bodyItems = [
    {name: 'About', link: 'about', icon: 'bi-info' }, 
    {name: 'Family Directory', link: 'family', icon: 'bi-people-fill'}, 
    {name: 'Gallery', link: 'gallery', icon: ' bi-images'}, 
    {name: 'Help and Advice', link: 'help', icon: 'bi-question'},
    {name: 'Schools', link: 'schools', icon: 'bi-building'},
    {name: 'DioceseCalendar', link: 'calendar', icon: 'bi-calendar'},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}

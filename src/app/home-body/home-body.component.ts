import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-home-body',
  templateUrl: './home-body.component.html',
  styleUrls: ['./home-body.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HomeBodyComponent implements OnInit {

  bodyItems = [
    {name: 'About', link: '', icon: 'bi-info' }, 
    {name: 'Family Directory', link: '', icon: 'bi-people-fill'}, 
    {name: 'Gallery', link: '', icon: ' bi-images'}, 
    {name: 'Help and Advice', link: '', icon: 'bi-question'},
    {name: 'Schools', link: 'schools', icon: 'bi-building'},
    {name: 'DioceseCalendar', link: '', icon: 'bi-calendar'},
    
  ]

  constructor() { }

  ngOnInit(): void {
  }

}

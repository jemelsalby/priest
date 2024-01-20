import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  profiles = [
    { name: 'Pauline I. Bird', jobTitle: 'Web Developer', image: 'https://edayan.org/assets/priest_photo/SebastianP.C1683278910.jpeg', phoneNumber: '1234567890', skype: '@skypename' },
    { name: 'Pauline I. Bird', jobTitle: 'Web Developer', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6J2-y_HTRNplmu1wsFtvPhJLr7TGILpLkGbY_2jIo2AO_Q8je7-jMqA255t-_vUkeenY&usqp=CAU', phoneNumber: '1234567890', skype: '@skypename' },
    { name: 'Pauline I. Bird', jobTitle: 'Web Developer', image: 'https://edayan.org/assets/priest_photo/PAN3.jpg', phoneNumber: '1234567890', skype: '@skypename' },
    { name: 'Pauline I. Bird', jobTitle: 'Web Developer', image: 'https://edayan.org/assets/priest_photo/MUK2.JPG', phoneNumber: '1234567890', skype: '@skypename' },
    { name: 'Pauline I. Bird', jobTitle: 'Web Developer', image: 'https://edayan.org/assets/priest_photo/MAT6.jpg', phoneNumber: '1234567890', skype: '@skypename' },
    // Add more profiles as needed
  ];

  constructor() { }

  ngOnInit(): void {
  }
}

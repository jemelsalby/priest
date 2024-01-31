import { Location } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-back-button',
  template: `
    <i class="bi bi-arrow-left-circle" role="button" (click)="onBack()"></i>
  `,
  styles: [
    `
      i {
        color: #001d3d;
      }
      i:hover {
        color: #00b4d8;
      }
    `,
  ],
})
export class BackButtonComponent {
  constructor(private location: Location) {}
  onBack() {
    this.location.back();
  }
}

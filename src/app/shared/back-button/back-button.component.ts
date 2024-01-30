import { Component } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
    selector: 'app-back-button',
    template: `
    <i class="bi bi-arrow-left-circle" role="button" (click)="onBack()"></i>
    `,
    styles: [`
    i{
        color: #001d3d;
        
    }
    i:hover{
        color: #00B4D8;
    }
    `]
})
export class BackButtonComponent{

    constructor(private route: ActivatedRoute,
        private router: Router
        ){

    }

    onBack(){

        this.router.navigate([""], { relativeTo: this.route})
    }
}
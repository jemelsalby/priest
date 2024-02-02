import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { Observable, take, tap } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

  // errorMessage?: string;
  signInMode = true;
  isLoading = false

  constructor(private authService: AuthService,private router: Router) { }

  ngOnInit(): void {
    this.authService.user
    .pipe(take(1))
    .subscribe(user =>{
      if(user){
        this.router.navigate([""]);
      }
    })
  }

  onSubmit(form: NgForm){

    let authSub = null;
    this.isLoading = true;
    if(this.signInMode){
      authSub = this.authService.login(form.value.email, form.value.password)
    }
    else{
      authSub = this.authService.signup(form.value.email, form.value.password, form.value.name)
    }
    authSub.subscribe({
      next: (value) =>{
        this.isLoading = false
        if(this.signInMode){
          this.router.navigate([''])
        }else{
          this.signInMode = !this.signInMode;
        }
      },
      error:(errMsg) =>{
        this.isLoading = false
        alert(errMsg)
      },
    })
    
  }

}

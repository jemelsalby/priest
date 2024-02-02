import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { take, tap } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  errorMessage?: string;

  constructor(private authService: AuthService,private router: Router) { }

  ngOnInit(): void {
  }

  onLogin(form: NgForm){

    console.log(form);
    
    this.authService
      .login(form.value.email, form.value.password)
      .subscribe({
        next: (value) =>{
          this.router.navigate([''])
        },
        error:(errMsg) =>{
            this.errorMessage = errMsg
            alert('Login unsuccessful')
        },
      })
  }

  onSignUp(form: NgForm){

    this.authService.signup(form.value.email, form.value.password, form.value.name)
      .subscribe({
        next: (value) =>{
          console.log(value);
          alert('signup successfull')
        },
        error:(errMsg) =>{
          this.errorMessage = errMsg
            alert('signup unsuccessful' + errMsg)
        }
      })
  }

}

import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {

  authCheckSignIn = false;

  constructor( private router: Router ) { }

  ngOnInit() {
  }

  signInClick() {
    this.authCheckSignIn = !this.authCheckSignIn;
  }

  loginSubmit(form: NgForm) {
    if (this.authCheckSignIn === false) {
      console.log('login Work');
    } else {
      console.log('Signin Work');
    }
    console.log(form.value);
    this.router.navigate(['places']);
  }

}

import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../../auth-service.service';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm: FormGroup;

  constructor(public authservice: AuthServiceService, private router: Router) { 
    this.loginForm = new FormGroup({
      enteredusername : new FormControl(''),
      enteredpassword: new FormControl('')
    });
  }


  async onLogin() {
    console.log("Form valid:", this.loginForm.valid);

    if (this.loginForm.valid) {
      const username = this.loginForm.value.enteredusername;
      const password = this.loginForm.value.enteredpassword;

      console.log("New Username:", username);
      console.log("New Password:", password);

      const response = await fetch('https://localhost:3000/api/user/login', {

      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username:username,
        password:password
      })

    })
    }

    if (this.router.url === '/login') {
      this.authservice.login(this.loginForm.value.enteredusername, this.loginForm.value.enteredpassword);
    } else {
      this.authservice.signup(this.loginForm.value.enteredusername, this.loginForm.value.enteredpassword);
    }



  }
}

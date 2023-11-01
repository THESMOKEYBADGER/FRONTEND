import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../../auth-service.service';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public authservice: AuthServiceService, private router: Router) { }

  ngOnInit(): void {
  }

  onLogin(loginform: NgForm) {
    if (loginform.invalid) {
      return;
    }

    if (this.router.url === '/login') {
      this.authservice.login(loginform.value.enteredusername, loginform.value.enteredpassword);
    } else {
      this.authservice.signup(loginform.value.enteredusername, loginform.value.enteredpassword);
    }
  }
}

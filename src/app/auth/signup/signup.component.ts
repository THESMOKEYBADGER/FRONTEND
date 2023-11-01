import { Component } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  // Define the onSignup function
  onSignup(signupForm: any) {
    // You can handle the signup logic here
    // For example, you can access form values via signupForm and submit them to a server
  }
}

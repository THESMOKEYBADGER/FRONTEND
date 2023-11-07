import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ErrorComponent } from 'src/app/error/error/error.component';
import { SuccessComponent } from 'src/app/success/success/success.component';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  signupForm: FormGroup;

  constructor(private dialog: MatDialog) {
    this.signupForm = new FormGroup({
      newUsername: new FormControl('', [Validators.required, Validators.minLength(1)]),
      newPassword: new FormControl('', [
        Validators.required,
        Validators.minLength(1),
        Validators.pattern('^([a-zA-Z0-9@*#]{8,15})$'),
      ]),
    });
  }

  async onSignup() {
    console.log('Function called');
    console.log('Form valid:', this.signupForm.valid);

    if (this.signupForm.valid) {
      const newUsername = this.signupForm.value.newUsername;
      const newPassword = this.signupForm.value.newPassword;

      console.log('New Username:', newUsername);
      console.log('New Password:', newPassword);

      try {
        const response = await fetch('https://localhost:3000/api/user/signup', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            username: newUsername,
            password: newPassword,
          }),
        });

        if (!response.ok) {
          const error = await response.json();
          this.openErrorDialog(error.message);
        } else {
          const success = await response.json(); // Parse the success message from the response
          this.openSuccessDialog(success.message); // Open the success dialog with the success message
        }
      } catch (error) {
        console.error('Error during signup:', error);
        this.openErrorDialog('An error occurred during signup.');
      }
    } else {
      // Display an error message to the user
    }
  }

  private openErrorDialog(errorMessage: string) {
    this.dialog.open(ErrorComponent, { data: { message: errorMessage } });
  }

  private openSuccessDialog(successMessage: string) {
    this.dialog.open(SuccessComponent, { data: { message: successMessage } });
  }
}
